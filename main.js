(() => {
  const hero = document.getElementById('hero');

  // On tall/narrow screens (phones), zoom the hero in on the planet + text
  // so it isn't tiny. Desktop keeps the original 1440x1024 frame.
  const FULL = '0 398 1440 1024';
  const TIGHT = '210 560 1020 830';
  const fit = () => {
    const portrait = window.innerWidth / window.innerHeight < 1.05;
    hero.setAttribute('viewBox', portrait ? TIGHT : FULL);
  };
  fit();
  window.addEventListener('resize', fit);

  // Start the intro only once the font is ready and the page is actually on
  // screen, so the reveal is never "used up" while loading or in a hidden tab.
  let started = false;
  const start = () => {
    if (started || document.visibilityState !== 'visible') return;
    started = true;
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('go')));
  };
  const fontsReady = document.fonts ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]) : Promise.resolve();
  fontsReady.then(() => {
    start();
    document.addEventListener('visibilitychange', start);
  });

  // Where "Click anywhere to explore" should go. Set this once page 2 exists,
  // e.g. NEXT_PAGE = '/about.html'
  const NEXT_PAGE = 'projects.html';

  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav')) return;

    const r = document.createElement('span');
    r.className = 'ripple';
    r.style.left = e.clientX + 'px';
    r.style.top = e.clientY + 'px';
    document.body.appendChild(r);
    r.addEventListener('animationend', () => r.remove());

    if (NEXT_PAGE) {
      document.body.style.transition = 'opacity .6s ease';
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = NEXT_PAGE; }, 600);
    }
  });
})();
