(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  const hero = $('#hero'), leaf = $('#leaf'), prompt = $('#prompt'), cue = $('#scrollCue');
  const bar = $('.bar'), sides = $$('.side');
  // start: leaf big and only its upper half on screen; scrolling lifts & shrinks it until the whole leaf shows
  const S0 = 1.4, TY0 = 24;            // start scale, start offset (vh)
  const setLeaf = (s, ty) => { leaf.style.transform = `translate(-50%, ${ty.toFixed(2)}vh) scale(${s.toFixed(4)})`; };

  // came here from the project card? (the card already flew the leaf into place)
  let fromCard = false;
  try { fromCard = sessionStorage.getItem('wg-from-card') === '1'; sessionStorage.removeItem('wg-from-card'); } catch (e) {}
  // always open at the leaf: some browsers / embedded viewers carry the previous page's scroll offset over
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  let userMoved = false;
  const toTop = () => { if (!userMoved && !location.hash) window.scrollTo(0, 0); };
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((t) => addEventListener(t, () => { userMoved = true; }, { once: true, passive: true }));
  toTop();
  addEventListener('DOMContentLoaded', toTop);
  addEventListener('load', () => { toTop(); setTimeout(toTop, 50); });
  addEventListener('pageshow', toTop);
  requestAnimationFrame(() => { toTop(); requestAnimationFrame(toTop); });

  // ---------- intro: white page -> leaf rises (half visible) -> title ----------
  $$('.title .line').forEach((line, li) => $$('span', line).forEach((s, i) => { s.style.transitionDelay = `${li * 0.16 + i * 0.06}s`; }));
  setLeaf(S0, TY0);
  let introDone = false;
  const LEAF_IN = fromCard ? 0 : 1300;
  if (!fromCard) {
    leaf.animate([{ transform: `translate(-50%, 100vh) scale(${S0})`, opacity: 0 }, { transform: `translate(-50%, ${TY0}vh) scale(${S0})`, opacity: 1 }],
      { duration: LEAF_IN, easing: 'cubic-bezier(.22,.8,.24,1)', delay: 150, fill: 'backwards' });
  }
  const fontsReady = document.fonts ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))]) : Promise.resolve();
  fontsReady.then(() => setTimeout(() => {
    document.body.classList.remove('intro');          // title letters rise
    setTimeout(() => { introDone = true; onScroll(); }, 1100);
  }, LEAF_IN * 0.75 + 150));

  // ---------- side texts: words light up as you scroll ----------
  const sideWords = sides.map((side) => {
    const words = [];
    $$('.eyebrow, .lead', side).forEach((el) => {
      const walk = (node) => {
        [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach((t) => {
              if (!t) return;
              if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
              const w = document.createElement('span'); w.className = 'wd'; w.textContent = t; frag.appendChild(w); words.push(w);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === 1) walk(n);
        });
      };
      walk(el);
    });
    return words;
  });
  const lightWords = (p) => {
    sideWords.forEach((words, si) => {
      const a = si === 0 ? 0.06 : 0.3, b = si === 0 ? 0.42 : 0.66;   // left side first, then right side
      words.forEach((w, i) => {
        const t = a + (b - a) * (i / words.length);
        w.style.opacity = p >= t ? 1 : '';
      });
    });
  };

  // ---------- hero scroll ----------
  let ready = false;
  const onScroll = () => {
    const max = hero.offsetHeight - innerHeight;
    const p = clamp(-hero.getBoundingClientRect().top / (max || 1));
    const k = ease(clamp(p / 0.7));
    if (introDone || p > 0) setLeaf(S0 + (1 - S0) * k, TY0 * (1 - k));
    lightWords(p);
    cue.style.opacity = p > 0.03 || !introDone ? 0 : 1;
    const r = p > 0.76;
    if (r !== ready) { ready = r; prompt.classList.toggle('show', r); leaf.classList.toggle('ready', r); }
    bar.classList.toggle('solid', scrollY > hero.offsetHeight - innerHeight * 0.6);
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  // ---------- city frames: cover their box like object-fit:cover ----------
  const AR = 2560 / 1350;
  const fit = () => $$('.frame').forEach((f) => {
    const box = f.parentElement.getBoundingClientRect();
    const w = box.width / box.height > AR ? box.width : box.height * AR;
    f.style.width = `${w}px`; f.style.height = `${w / AR}px`;
  });
  fit(); addEventListener('resize', fit);

  // ---------- click the leaf: weave transition ----------
  // While it plays, page scrolling is locked, so a wheel / trackpad flick can't push the page past the
  // landing point. When it ends we sit exactly at the top of the pages section, the overlay lifts away,
  // and only then does the section heading write itself in.
  const weave = $('#weave');
  const pagesSec = $('#pages');
  const headText = $('.pages .head-text');
  let playing = false, endTimer = 0, zoomAnim = null;
  const block = (e) => { if (playing) e.preventDefault(); };
  const blockKeys = (e) => { if (playing && [' ', 'PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) e.preventDefault(); };
  addEventListener('wheel', block, { passive: false });
  addEventListener('touchmove', block, { passive: false });
  addEventListener('keydown', blockKeys);

  const land = () => window.scrollTo({ top: pagesSec.offsetTop, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
  const finish = () => {
    if (!playing || weave.classList.contains('leave')) return;
    clearTimeout(endTimer);
    headText.classList.remove('in');            // heading waits until the overlay has gone
    headText.style.transitionDelay = '0s';
    land();
    requestAnimationFrame(land);                // and once more after layout settles
    weave.classList.add('leave');
    setTimeout(() => { headText.classList.add('in'); }, 650);
    setTimeout(() => {
      land();
      weave.classList.remove('on', 'play', 'leave');
      if (zoomAnim) { zoomAnim.cancel(); zoomAnim = null; }   // leaf is back when you return to the top
      playing = false;
    }, 1000);
  };
  const play = () => {
    if (playing) return;
    playing = true;
    fit();
    const img = leaf.querySelector('img');
    zoomAnim = img.animate([{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(1.35)', opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' });
    weave.classList.add('on');
    void weave.offsetWidth;
    weave.classList.add('play');
    endTimer = setTimeout(finish, 4600);
  };
  leaf.addEventListener('click', play);
  prompt.addEventListener('click', play);
  weave.addEventListener('click', finish);
  addEventListener('keydown', (e) => { if (e.key === 'Escape') finish(); });

  // ---------- four pages: hover to enlarge ----------
  const screens = $('#screens');
  const items = $$('.screen', screens);
  const canHover = matchMedia('(hover: hover)').matches;
  const activate = (el) => {
    items.forEach((i) => i.classList.toggle('active', i === el));
    screens.classList.toggle('has-active', !!el);
  };
  if (canHover) {
    items.forEach((el) => el.addEventListener('mouseenter', () => activate(el)));
    screens.addEventListener('mouseleave', () => activate(null));
  }
  items.forEach((el) => el.addEventListener('focusin', () => activate(el)));
  const longView = $('.screen.long .view');
  longView.addEventListener('scroll', () => longView.parentElement.classList.toggle('scrolled', longView.scrollTop > 20), { passive: true });

  // ---------- colour swatches: copy hex ----------
  $$('.sw').forEach((sw) => sw.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(sw.dataset.hex); } catch (e) {}
    sw.classList.add('copied');
    setTimeout(() => sw.classList.remove('copied'), 1200);
  }));

  // ---------- scroll reveal ----------
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting || playing) return;
    const el = en.target;
    const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 6) * 0.08}s`;
    el.classList.add('in');
    io.unobserve(el);
  }), { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
  // once revealed, clear the stagger so hover transitions are instant
  document.addEventListener('transitionend', (e) => { if (e.target.classList?.contains('in')) e.target.style.transitionDelay = ''; });

  // smooth in-page links
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const t = $(a.getAttribute('href')); if (!t) return;
    e.preventDefault(); window.scrollTo({ top: t.offsetTop, behavior: 'smooth' });
  }));
})();
