/* Black hole rising from the bottom of the projects page.
   Colours follow the JXverse palette (lavender / pink / magenta / deep blue). */
(() => {
  const cv = document.getElementById('bh');
  if (!cv) return;
  const ctx = cv.getContext('2d');

  // ---- tweakables ----
  const PALETTE = ['#B6B7FC', '#FCDDEC', '#D96BA8', '#8F8DB8', '#7FA0E8'];
  const RING_STRANDS = 1600;   // swirling fibres around the hole
  const BAND_STRANDS = 700;    // the edge-on disk crossing in front
  const BAND_TILT = 0.17;     // radians; 0 = flat horizon
  const SPEED = 1;            // overall spin speed

  let W = 0, H = 0, R = 0, cx = 0, cy = 0, dpr = 1;
  let ring = [], band = [];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = () => PALETTE[(Math.random() * PALETTE.length) | 0];

  const build = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    R = Math.min(W * 0.16, H * 0.27);          // event-horizon radius
    cx = W * (W < 700 ? 0.5 : 0.27);            // bottom-left (centred on phones)
    cy = H - R * 0.62;                          // hole rises from the bottom edge

    ring = Array.from({ length: RING_STRANDS }, () => {
      const t = Math.pow(Math.random(), 2.2);   // bunch up near the photon ring
      return {
        r: R * (1.03 + t * 0.75),
        a: rnd(0, Math.PI * 2),
        len: rnd(0.15, 1.1),
        w: rnd(0.4, 1.8),
        alpha: (1 - t * 0.85) * rnd(0.06, 0.3),
        col: pick(),
        spin: rnd(0.6, 1.2) / (0.6 + t * 2.2),  // inner fibres move faster
      };
    });
    band = Array.from({ length: BAND_STRANDS }, () => {
      const t = Math.pow(Math.random(), 1.6);
      return {
        rx: R * (1.7 + t * 2.6),                // long, flat ellipses = disk seen edge-on
        ry: R * (0.06 + Math.random() * 0.12),
        a: rnd(0, Math.PI * 2),
        len: rnd(0.2, 0.9),
        w: rnd(0.4, 2.2),
        alpha: (1 - t * 0.6) * rnd(0.1, 0.34),
        col: pick(),
        spin: rnd(0.5, 1.1) / (0.7 + t),
      };
    });
  };

  const glow = () => {
    const g = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 2.6);
    g.addColorStop(0, 'rgba(182,183,252,.30)');
    g.addColorStop(0.25, 'rgba(178,70,141,.16)');
    g.addColorStop(0.6, 'rgba(69,57,112,.10)');
    g.addColorStop(1, 'rgba(28,16,38,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    const a = ctx.createRadialGradient(cx, cy, R * 0.98, cx, cy, R * 1.45);
    a.addColorStop(0, 'rgba(252,221,236,.55)');
    a.addColorStop(0.12, 'rgba(182,183,252,.35)');
    a.addColorStop(0.45, 'rgba(178,70,141,.12)');
    a.addColorStop(1, 'rgba(178,70,141,0)');
    ctx.fillStyle = a;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.45, 0, Math.PI * 2); ctx.fill();
  };
  const bandGlow = () => {
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate(BAND_TILT); ctx.scale(1, 0.11);
    const g = ctx.createRadialGradient(0, 0, R * 0.6, 0, 0, R * 3.4);
    g.addColorStop(0, 'rgba(252,221,236,.55)');
    g.addColorStop(0.3, 'rgba(182,183,252,.28)');
    g.addColorStop(1, 'rgba(182,183,252,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(0, 0, R * 3.4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };

  const drawRing = (time) => {
    for (const s of ring) {
      const a = s.a + time * 0.00012 * s.spin * SPEED;
      ctx.beginPath();
      ctx.arc(cx, cy, s.r, a, a + s.len);
      ctx.strokeStyle = s.col;
      ctx.globalAlpha = s.alpha * (0.45 + 0.75 * (0.5 + 0.5 * Math.cos(a + s.len / 2 + 2.3)));
      ctx.lineWidth = s.w;
      ctx.stroke();
    }
  };

  // half = 'back' draws the far side of the band (behind the hole), 'front' the near side
  const drawBand = (time, half) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(BAND_TILT);
    for (const s of band) {
      const a0 = s.a + time * 0.0001 * s.spin * SPEED;
      // split each strand into the part with sin>0 (front, lower) or sin<0 (back, upper)
      const steps = 10;
      ctx.beginPath();
      let pen = false;
      for (let k = 0; k <= steps; k++) {
        const a = a0 + (s.len * k) / steps;
        const front = Math.sin(a) > 0;
        if ((half === 'front') !== front) { pen = false; continue; }
        const x = Math.cos(a) * s.rx, y = Math.sin(a) * s.ry;
        if (!pen) { ctx.moveTo(x, y); pen = true; } else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = s.col;
      ctx.globalAlpha = s.alpha * (half === 'front' ? 1.25 : 0.9);
      ctx.lineWidth = s.w;
      ctx.stroke();
    }
    ctx.restore();
  };

  const horizon = () => {
    // photon ring
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.015, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(252,221,236,.85)';
    ctx.lineWidth = 1.6;
    ctx.shadowColor = '#B6B7FC'; ctx.shadowBlur = 24;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // event horizon
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.3, R * 0.1, cx, cy, R);
    g.addColorStop(0, '#120a1a');
    g.addColorStop(0.85, '#0b0610');
    g.addColorStop(1, '#1a0f24');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
  };

  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

  const frame = (time) => {
    if (visible && !window.__pauseFx) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      glow();

      ctx.globalCompositeOperation = 'lighter';
      drawBand(time, 'back');
      drawRing(time);
      horizon();                                   // hole covers everything behind it
      ctx.globalCompositeOperation = 'lighter';
      bandGlow();
      drawBand(time, 'front');                     // near side of the disk passes in front
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(frame);
  };

  build();
  window.addEventListener('resize', build);
  requestAnimationFrame(frame);
})();
