/* Leaf puzzle: the Weave Green leaf breaks into 6 photo pieces scattered on both sides
   around the fixed stitched frame; drag each back into its stitched slot. When the leaf
   is whole, a card with Singapore green links pops up. */
(() => {
  // positions are fractions of the full leaf box (608 x 1200 source)
  const LEAF_AR = 608 / 1200;
  const PIECES = [
    { id: 'photo1', x: 0.68092, y: 0.08167, w: 0.30921, h: 0.42167 },
    { id: 'photo2', x: 0.36184, y: 0.17833, w: 0.27961, h: 0.53417 },
    { id: 'photo3', x: 0.71053, y: 0.31667, w: 0.22533, h: 0.32 },
    { id: 'photo4', x: 0.01974, y: 0.17667, w: 0.19243, h: 0.4 },
    { id: 'photo5', x: 0.21053, y: 0.10667, w: 0.22039, h: 0.4775 },
    { id: 'photo6', x: 0.50164, y: 0.0775,  w: 0.24671, h: 0.56917 },
  ];

  const board = document.getElementById('pzBoard');
  if (!board) return;
  const target = document.getElementById('pzTarget');
  const overlay = document.getElementById('pzOverlay');
  const countEl = document.getElementById('pzCount');
  const modal = document.getElementById('pzModal');
  document.getElementById('pzTotal').textContent = PIECES.length;

  const slotMap = new Map();
  board.querySelectorAll('.pz-slots .slot').forEach((g) => {
    slotMap.set(g.dataset.id, g);
  });

  let T = { x: 0, y: 0, w: 0, h: 0 }, B = { w: 0, h: 0 }, portrait = false;
  let zTop = 12, started = false, done = false;
  let timers = [];
  const later = (fn, ms) => {
    const id = setTimeout(() => {
      timers = timers.filter((t) => t !== id);
      fn();
    }, ms);
    timers.push(id);
    return id;
  };
  const clearTimers = () => {
    timers.forEach((id) => clearTimeout(id));
    timers = [];
  };

  // ---------- build pieces ----------
  const pieces = PIECES.map((p, i) => {
    const el = document.createElement('img');
    el.className = 'pz-piece placed';
    el.src = `img/wg/puzzle/${p.id}.webp`;
    el.alt = '';
    el.draggable = false;
    el.style.zIndex = 3;
    board.appendChild(el);
    const piece = {
      ...p,
      el,
      slot: slotMap.get(p.id) || null,
      placed: true,
      side: i % 2 ? -1 : 1,
      sx: 0.5,
      sy: 0.5,
      rot: 0,
      cx: 0,
      cy: 0,
      pw: 0,
      ph: 0,
      tx: 0,
      ty: 0,
      alpha: null,
    };
    const buildAlpha = () => {
      if (piece.alpha || !el.naturalWidth) return;
      try {
        const c = document.createElement('canvas');
        const k = 0.25;
        c.width = Math.max(1, Math.round(el.naturalWidth * k));
        c.height = Math.max(1, Math.round(el.naturalHeight * k));
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(el, 0, 0, c.width, c.height);
        piece.alpha = { data: ctx.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height };
      } catch (e) {
        piece.alpha = null;
      }
    };
    if (el.complete && el.naturalWidth) buildAlpha();
    else el.addEventListener('load', buildAlpha, { once: true });
    if (piece.slot) piece.slot.classList.add('filled');
    return piece;
  });

  // ---------- layout ----------
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  const put = (p, x, y, r) => {
    p.cx = x;
    p.cy = y;
    p.el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  };

  // scattered "home" spot, stored as fractions so it survives resizes
  const homeOf = (p) => {
    if (portrait) {
      const top = T.y + T.h + 14;
      const maxX = Math.max(0, B.w - p.pw);
      const areaH = Math.max(40, B.h - top - p.ph);
      return [p.sx * maxX, clamp(top + p.sy * areaH, top, Math.max(top, B.h - p.ph))];
    }
    const gap = Math.max(24, T.w * 0.14);
    const leftEnd = T.x - gap;
    const rightStart = T.x + T.w + gap;
    const pad = 12;
    const side = p.side < 0 ? [pad, Math.max(pad, leftEnd)] : [Math.min(B.w - pad, rightStart), B.w - pad];
    const span = Math.max(0, side[1] - side[0] - p.pw);
    const rawX = side[1] - side[0] < p.pw
      ? (p.side < 0 ? Math.max(pad, side[1] - p.pw) : Math.min(B.w - pad - p.pw, side[0]))
      : side[0] + p.sx * span;
    const maxY = Math.max(0, B.h - p.ph);
    return [clamp(rawX, 0, Math.max(0, B.w - p.pw)), clamp(p.sy * maxY, 0, maxY)];
  };

  const saveDropPosition = (p) => {
    if (portrait) {
      const top = T.y + T.h + 14;
      const maxX = Math.max(1, B.w - p.pw);
      const areaH = Math.max(1, B.h - top - p.ph);
      p.sx = clamp(p.cx / maxX, 0, 1);
      p.sy = clamp((p.cy - top) / areaH, 0, 1);
      return;
    }
    p.side = p.cx + p.pw / 2 < B.w / 2 ? -1 : 1;
    const gap = Math.max(24, T.w * 0.14);
    const leftEnd = T.x - gap;
    const rightStart = T.x + T.w + gap;
    const pad = 12;
    const side = p.side < 0 ? [pad, Math.max(pad, leftEnd)] : [Math.min(B.w - pad, rightStart), B.w - pad];
    const span = Math.max(1, side[1] - side[0] - p.pw);
    p.sx = clamp((p.cx - side[0]) / span, 0, 1);
    p.sy = clamp(p.cy / Math.max(1, B.h - p.ph), 0, 1);
  };

  const layout = () => {
    B.w = board.clientWidth;
    B.h = board.clientHeight;
    if (!B.w || !B.h) return;
    portrait = B.w / B.h < 1.05;
    if (portrait) {
      T.h = Math.min(B.h * 0.56, (B.w * 0.62) / LEAF_AR);
      T.w = T.h * LEAF_AR;
      T.x = (B.w - T.w) / 2;
      T.y = 0;
    } else {
      T.h = B.h * 0.94;
      T.w = T.h * LEAF_AR;
      T.x = (B.w - T.w) / 2;
      T.y = (B.h - T.h) / 2;
    }
    const box = { left: `${T.x}px`, top: `${T.y}px`, width: `${T.w}px`, height: `${T.h}px` };
    Object.assign(target.style, box);
    if (overlay) Object.assign(overlay.style, box);

    pieces.forEach((p) => {
      p.pw = p.w * T.w;
      p.ph = p.h * T.h;
      p.el.style.width = `${p.pw}px`;
      p.el.style.height = `${p.ph}px`;
      p.tx = T.x + p.x * T.w;
      p.ty = T.y + p.y * T.h;
      if (p.placed) put(p, p.tx, p.ty, 0);
      else put(p, ...homeOf(p), p.rot);
    });
  };

  // ---------- scatter / gather ----------
  const updateCount = () => {
    const n = pieces.filter((p) => p.placed).length;
    countEl.textContent = done ? PIECES.length : n;
  };

  const clearNear = () => {
    slotMap.forEach((g) => g.classList.remove('near'));
  };

  const scatter = () => {
    clearTimers();
    clearNear();
    done = false;
    board.classList.remove('done');
    const order = pieces.slice().sort(() => Math.random() - 0.5);
    let l = 0, r = 0;
    order.forEach((p, i) => {
      p.side = i % 2 === 0 ? -1 : 1;
      const k = p.side < 0 ? l++ : r++;
      p.sx = 0.14 + Math.random() * 0.72;
      p.sy = clamp((k + 0.5) / 3 + (Math.random() - 0.5) * 0.14, 0.05, 0.95);
      p.rot = (Math.random() - 0.5) * 28;
      p.placed = false;
      p.el.classList.remove('placed', 'snap', 'dragging');
      p.el.style.zIndex = ++zTop;
      if (p.slot) p.slot.classList.remove('filled', 'near');
    });
    pieces.forEach((p, i) => later(() => put(p, ...homeOf(p), p.rot), i * 70));
    updateCount();
  };

  const gather = () => {
    clearTimers();
    clearNear();
    pieces.forEach((p) => {
      p.placed = true;
      p.rot = 0;
      p.el.classList.remove('dragging');
      p.el.classList.add('placed');
      p.el.style.zIndex = 3;
      if (p.slot) p.slot.classList.add('filled');
      put(p, p.tx, p.ty, 0);
    });
  };

  // ---------- dragging ----------
  let drag = null;
  const snapTolerance = () => Math.max(24, T.h * 0.065);

  const hit = (p, x, y) => {
    const cx = p.cx + p.pw / 2;
    const cy = p.cy + p.ph / 2;
    const a = (-p.rot * Math.PI) / 180;
    const dx = x - cx;
    const dy = y - cy;
    const lx = dx * Math.cos(a) - dy * Math.sin(a) + p.pw / 2;
    const ly = dx * Math.sin(a) + dy * Math.cos(a) + p.ph / 2;
    if (lx < 0 || ly < 0 || lx > p.pw || ly > p.ph) return false;
    if (!p.alpha) return true;
    const ix = clamp(Math.floor((lx / p.pw) * p.alpha.w), 0, p.alpha.w - 1);
    const iy = clamp(Math.floor((ly / p.ph) * p.alpha.h), 0, p.alpha.h - 1);
    return p.alpha.data[(iy * p.alpha.w + ix) * 4 + 3] > 24;
  };

  const local = (e) => {
    const r = board.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };

  board.addEventListener('pointerdown', (e) => {
    if (done || !started) return;
    const [x, y] = local(e);
    const cand = pieces
      .filter((p) => !p.placed && hit(p, x, y))
      .sort((a, b) => Number(b.el.style.zIndex) - Number(a.el.style.zIndex))[0];
    if (!cand) return;
    e.preventDefault();
    try { board.setPointerCapture(e.pointerId); } catch (err) {}
    cand.rot = 0;
    cand.el.style.zIndex = ++zTop;
    cand.el.classList.add('dragging');
    drag = { p: cand, id: e.pointerId, ox: x - cand.cx, oy: y - cand.cy };
    put(cand, cand.cx, cand.cy, 0);
  });

  board.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const [x, y] = local(e);
    const p = drag.p;
    const nx = clamp(x - drag.ox, -p.pw * 0.25, B.w - p.pw * 0.75);
    const ny = clamp(y - drag.oy, -p.ph * 0.25, B.h - p.ph * 0.75);
    put(p, nx, ny, 0);
    if (p.slot) {
      const dist = Math.hypot(p.cx - p.tx, p.cy - p.ty);
      p.slot.classList.toggle('near', dist < snapTolerance() * 1.45);
    }
  });

  const drop = (e) => {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    const p = drag.p;
    drag = null;
    try { board.releasePointerCapture(e.pointerId); } catch (err) {}
    p.el.classList.remove('dragging');
    if (p.slot) p.slot.classList.remove('near');

    if (Math.hypot(p.cx - p.tx, p.cy - p.ty) < snapTolerance()) {
      p.placed = true;
      p.rot = 0;
      p.el.classList.add('placed', 'snap');
      p.el.style.zIndex = 3;
      if (p.slot) p.slot.classList.add('filled');
      put(p, p.tx, p.ty, 0);
      later(() => p.el.classList.remove('snap'), 600);
      updateCount();
      if (pieces.every((q) => q.placed)) complete();
    } else {
      const cx = clamp(p.cx, 0, Math.max(0, B.w - p.pw));
      const cy = clamp(p.cy, 0, Math.max(0, B.h - p.ph));
      p.rot = 0;
      put(p, cx, cy, 0);
      saveDropPosition(p);
    }
  };
  board.addEventListener('pointerup', drop);
  board.addEventListener('pointercancel', drop);

  // ---------- finish ----------
  const complete = () => {
    done = true;
    updateCount();
    later(() => board.classList.add('done'), 320);
    later(openCard, 1250);
  };
  const openCard = () => {
    modal.hidden = false;
    void modal.offsetWidth;
    modal.classList.add('show');
    document.getElementById('pzAgain').focus({ preventScroll: true });
  };
  const closeCard = () => {
    modal.classList.remove('show');
    modal.hidden = true;
  };

  const restart = () => {
    clearTimers();
    closeCard();
    board.classList.remove('done');
    started = true;
    gather();
    updateCount();
    later(scatter, 450);
  };

  document.getElementById('pzRestart').addEventListener('click', restart);
  document.getElementById('pzAgain').addEventListener('click', restart);
  document.getElementById('pzSolve').addEventListener('click', () => {
    if (done) return;
    started = true;
    gather();
    updateCount();
    complete();
  });
  document.getElementById('pzClose').addEventListener('click', closeCard);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeCard(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeCard(); });
  document.getElementById('pzToTop').addEventListener('click', (e) => {
    e.preventDefault();
    closeCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- start: the whole leaf breaks apart when you reach it ----------
  layout();
  addEventListener('resize', layout);
  const io = new IntersectionObserver((en) => {
    if (en[0].isIntersecting && !started) {
      started = true;
      later(scatter, 450);
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(board);
})();
