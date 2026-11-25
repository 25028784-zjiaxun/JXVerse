/* ============================================================
   JXVERSE PROJECTS — CATEGORIES & FIXED 4-CARD CAROUSELS
   Edit any category or project slot below.
   - Set blank: true for an empty placeholder slot.
   - Remove blank: true and fill in title / tag / year / summary / link when ready.
   ============================================================ */

const CATEGORY_SVGS = {
  dev: `
    <div class="cat-svg" aria-hidden="true">
      <svg viewBox="0 0 180 150" fill="none">
        <rect x="16" y="20" width="148" height="104" rx="12" stroke="#12520C" stroke-opacity=".24" stroke-width="2" fill="#FFFFFF" fill-opacity=".28"/>
        <line x1="16" y1="42" x2="164" y2="42" stroke="#12520C" stroke-opacity=".22" stroke-width="1.6"/>
        <circle cx="30" cy="31" r="3.2" fill="#12520C" fill-opacity=".34"/>
        <circle cx="42" cy="31" r="3.2" fill="#12520C" fill-opacity=".24"/>
        <circle cx="54" cy="31" r="3.2" fill="#12520C" fill-opacity=".18"/>
        <path d="M68 68L50 84L68 100" stroke="#12520C" stroke-opacity=".46" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M112 68L130 84L112 100" stroke="#12520C" stroke-opacity=".46" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="97" y1="62" x2="83" y2="106" stroke="#205350" stroke-opacity=".42" stroke-width="2.8" stroke-linecap="round"/>
      </svg>
    </div>`,
  cert: `
    <div class="cat-svg" aria-hidden="true">
      <svg viewBox="0 0 180 164" fill="none">
        <rect x="22" y="18" width="136" height="94" rx="10" stroke="#3A2357" stroke-opacity=".28" stroke-width="2" fill="#FFFFFF" fill-opacity=".32"/>
        <line x1="42" y1="44" x2="102" y2="44" stroke="#3A2357" stroke-opacity=".34" stroke-width="2.4" stroke-linecap="round"/>
        <line x1="42" y1="58" x2="88" y2="58" stroke="#3A2357" stroke-opacity=".22" stroke-width="2" stroke-linecap="round"/>
        <line x1="42" y1="72" x2="76" y2="72" stroke="#3A2357" stroke-opacity=".18" stroke-width="2" stroke-linecap="round"/>
        <path d="M112 100L104 140L121 130L138 140L130 100" fill="#453970" fill-opacity=".28" stroke="#3A2357" stroke-opacity=".46" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="121" cy="84" r="24" fill="#F6EEFB" fill-opacity=".86" stroke="#3A2357" stroke-opacity=".55" stroke-width="2.2"/>
        <circle cx="121" cy="84" r="17" stroke="#8F8DB8" stroke-opacity=".65" stroke-width="1.4" stroke-dasharray="3 3"/>
        <path d="M121 72L124.2 79.2L132 80L126 85.2L127.8 93L121 88.8L114.2 93L116 85.2L110 80L117.8 79.2L121 72Z" fill="#453970" fill-opacity=".68"/>
      </svg>
    </div>`,
};

const CATEGORIES = [
  {
    id: "development",
    short: "Web & App",
    title: "Web & App\nDevelopment",
    bgLines: ["Web &", "App Development"],
    color: "linear-gradient(180deg, #FFFFFF 0%, #DEFAD6 53%, #205350 100%)",
    accent: "#12520C",
    ink: "#FFFFFF",
    svg: "dev",
    projects: [
      {
        blank: true,
        tag: "",
        color: "linear-gradient(180deg, #FFFFFF 0%, #DEFAD6 53%, #205350 100%)",
        accent: "#12520C",
        pill: "rgba(51,175,119,.6)",
        ink: "#FFFFFF",
      },
      {
        title: "TravelMate",
        mode: "team",
        tag: "Software development",
        year: "Year 2 · Sem 1",
        color: "linear-gradient(180deg, #FFFFFF 0%, #A4B2BB 53%, #1A3D53 100%)",
        accent: "#112144",
        pill: "rgba(51,148,175,.6)",
        ink: "#FFFFFF",
        font: "rounded",
        summary: "Full-stack travel planning software built as a team project.",
        link: "#",
      },
      {
        title: "PIZZA APP",
        tag: "React App",
        year: "Year 2 · Sem 2",
        color: "linear-gradient(180deg, #FAF3DD 34%, #1E4628 100%)",
        accent: "#1E4628",
        pill: "rgba(39,116,82,.6)",
        ink: "#FFFFFF",
        font: "grotesk",
        summary: "Interactive React web application for browsing and ordering pizza.",
        stack: ["React"],
        link: "#",
      },
      {
        blank: true,
        tag: "Mobile App",
        color: "linear-gradient(180deg, #DAF1EE 0%, #1B3F12 100%)",
        accent: "#1E4527",
        pill: "rgba(15,59,26,.9)",
        ink: "#FFFFFF",
      },
    ],
  },
  {
    id: "devops",
    short: "DevOps & Chatbot",
    title: "DevOps &\nChatbot",
    bgLines: ["DevOps &", "Chatbot"],
    color: "linear-gradient(180deg, #FFFFFF 0%, #A4B2BB 53%, #1A3D53 100%)",
    accent: "#112144",
    ink: "#FFFFFF",
    art: "img/projects/modulego-logo.svg",
    artClass: "art-logo",
    projects: [
      {
        title: "Module Go",
        mode: "team",
        tag: "DevOps",
        year: "Year 2 · Sem 1",
        color: "linear-gradient(180deg, #FFFFFF 0%, #DEFAD6 53%, #205350 100%)",
        accent: "#12520C",
        pill: "rgba(51,175,119,.6)",
        ink: "#FFFFFF",
        font: "grotesk",
        art: "img/projects/modulego-logo.svg",
        artClass: "art-logo",
        summary: "Collaborative DevOps pipeline and module management project.",
        stack: ["DevOps", "CI/CD", "GitHub"],
        link: "https://github.com/xavlkh/ModuleGo",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FFFFFF 0%, #A4B2BB 53%, #1A3D53 100%)",
        accent: "#112144",
        pill: "rgba(51,148,175,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FAF3DD 34%, #1E4628 100%)",
        accent: "#1E4628",
        pill: "rgba(39,116,82,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #DAF1EE 0%, #1B3F12 100%)",
        accent: "#1E4527",
        pill: "rgba(15,59,26,.9)",
        ink: "#FFFFFF",
      },
    ],
  },
  {
    id: "design",
    short: "UI/UX & Web",
    title: "UI/UX &\nWeb Design",
    bgLines: ["UI/UX &", "Web Design"],
    color: "linear-gradient(180deg, #FDF6EC 0%, #F4EBDD 38%, #C8D2BC 62%, #8FA587 78%, #5F7A5A 90%, #3E5A3A 100%)",
    accent: "#1E4628",
    ink: "#FFFFFF",
    art: "img/weave-green-leaf.webp",
    artClass: "art-leaf-cat",
    projects: [
      {
        title: "Weave Green",
        mode: "solo",
        tag: "Website Design",
        year: "Year 2 · Sem 1",
        art: "img/weave-green-leaf.webp",
        theme: "light",
        color: "linear-gradient(180deg, #FDF6EC 0%, #F4EBDD 38%, #C8D2BC 62%, #8FA587 78%, #5F7A5A 90%, #3E5A3A 100%)",
        summary: "A website concept for urban greening in Singapore — community gardens, nature walks and green architecture, woven into one leaf.",
        role: "Web Design, UI",
        stack: ["Adobe Photoshop", "Adobe Illustrator"],
        link: "weave-green.html",
        page: "weave-green.html",
      },
      {
        blank: true,
        tag: "UI/UX",
        color: "linear-gradient(180deg, #F6EEFB 0%, #B9B3E3 50%, #453970 100%)",
        accent: "#453970",
        pill: "rgba(143,141,184,.75)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FCEFF5 0%, #D9A3C2 50%, #4C1E3C 100%)",
        accent: "#4C1E3C",
        pill: "rgba(178,70,141,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #EEF4FF 0%, #A9BCE6 50%, #21304A 100%)",
        accent: "#21304A",
        pill: "rgba(110,143,209,.7)",
        ink: "#FFFFFF",
      },
    ],
  },
  {
    id: "volunteer",
    short: "Volunteer",
    title: "VOLUNTEER",
    bgLines: ["VOLUNTEER", "& COMMUNITY"],
    color: "linear-gradient(180deg, #DAF1EE 0%, #1B3F12 100%)",
    accent: "#1E4527",
    ink: "#FFFFFF",
    art: "img/projects/butterfly.webp",
    artClass: "art-right",
    projects: [
      {
        title: "Volunteers in Pasir Ris Park",
        mode: "solo",
        tag: "Volunteers",
        year: "2025 – now",
        art: "img/projects/butterfly.webp",
        artClass: "art-right",
        color: "linear-gradient(180deg, #DAF1EE 0%, #1B3F12 100%)",
        accent: "#1E4527",
        pill: "rgba(15,59,26,.9)",
        ink: "#FFDCC1",
        font: "soft-serif",
        summary: "Community nature volunteering at Pasir Ris Park.",
        link: "#",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FFFFFF 0%, #DEFAD6 53%, #205350 100%)",
        accent: "#12520C",
        pill: "rgba(51,175,119,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FAF3DD 34%, #1E4628 100%)",
        accent: "#1E4628",
        pill: "rgba(39,116,82,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FFFFFF 0%, #A4B2BB 53%, #1A3D53 100%)",
        accent: "#112144",
        pill: "rgba(51,148,175,.6)",
        ink: "#FFFFFF",
      },
    ],
  },
  {
    id: "certifications",
    short: "Certifications",
    title: "Certifications",
    bgLines: ["CERTIFICATIONS", "& CREDENTIALS"],
    color: "linear-gradient(180deg, #F6EEFB 0%, #C9C7ED 48%, #3A2357 100%)",
    accent: "#3A2357",
    ink: "#FFFFFF",
    svg: "cert",
    projects: [
      {
        blank: true,
        color: "linear-gradient(180deg, #F6EEFB 0%, #B9B3E3 50%, #453970 100%)",
        accent: "#453970",
        pill: "rgba(143,141,184,.75)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #FCEFF5 0%, #D9A3C2 50%, #4C1E3C 100%)",
        accent: "#4C1E3C",
        pill: "rgba(178,70,141,.6)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #EEF4FF 0%, #A9BCE6 50%, #21304A 100%)",
        accent: "#21304A",
        pill: "rgba(110,143,209,.7)",
        ink: "#FFFFFF",
      },
      {
        blank: true,
        color: "linear-gradient(180deg, #F3EEF8 0%, #C9C7ED 50%, #3A2357 100%)",
        accent: "#3A2357",
        pill: "rgba(58,35,87,.6)",
        ink: "#FFFFFF",
      },
    ],
  },
];

/* ============================================================ */
(() => {
  const track = document.getElementById('track');
  const showcase = document.getElementById('showcase');
  const pin = document.querySelector('.pin');
  const curEl = document.getElementById('cur');
  const totalEl = document.getElementById('total');
  const captionEl = document.getElementById('caption');
  const hintEl = document.getElementById('hint');
  const bar = document.getElementById('bar');
  const bigword = document.querySelector('.bigword span');
  const bwLine1 = document.getElementById('bwLine1');
  const bwLine2 = document.getElementById('bwLine2');
  const backBtn = document.getElementById('backBtn');
  const projectsLink = document.getElementById('jxProjectsLink');
  const catTabs = document.getElementById('catTabs');

  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const canHover = window.matchMedia('(hover: hover)').matches;
  const findCategory = (id) => CATEGORIES.find((c) => c.id === id) || null;
  const getCatFromUrl = () => new URLSearchParams(window.location.search).get('category') || '';

  // ---- preload Weave Green hero leaf for smooth hand-off ----
  const HERO_ART = { 'weave-green.html': 'img/wg/leaf-hero.webp' };
  const preloaded = {};
  const preload = (page) => {
    const src = HERO_ART[page];
    if (!src || preloaded[src]) return;
    const im = new Image(); im.decoding = 'async'; im.src = src; preloaded[src] = im;
    const l = document.createElement('link'); l.rel = 'prefetch'; l.href = page; document.head.appendChild(l);
  };
  setTimeout(() => preload('weave-green.html'), 1200);

  // ---- quick category tabs ----
  catTabs.innerHTML = [
    `<button class="cat-tab" type="button" data-cat="">All</button>`,
    ...CATEGORIES.map((c) => `<button class="cat-tab" type="button" data-cat="${esc(c.id)}">${esc(c.short)}</button>`),
  ].join('');

  catTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-cat]');
    if (btn) navigateTo(btn.dataset.cat, true);
  });
  backBtn.addEventListener('click', () => navigateTo('', true));
  if (projectsLink) {
    projectsLink.addEventListener('click', (e) => {
      if (activeCatId) { e.preventDefault(); navigateTo('', true); }
    });
  }

  // ---- state for active carousel ----
  let activeCatId = '';
  let items = [];
  let cards = [];
  let N = 0;
  let target = 0, pos = 0, lastIdx = -1;
  let t0 = performance.now() + 250;
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  const sizeSection = () => {
    showcase.style.height = `${Math.max(1, N) * 85 + 15}vh`;
  };
  window.addEventListener('resize', sizeSection);

  const topFor = (i) => {
    const max = showcase.offsetHeight - window.innerHeight;
    return showcase.offsetTop + (Math.max(0, Math.min(N - 1, i)) / Math.max(1, N - 1)) * max;
  };
  const scrollToCard = (i, behavior = 'smooth') => window.scrollTo({ top: topFor(i), behavior });

  const readScroll = () => {
    const rect = showcase.getBoundingClientRect();
    const max = showcase.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -rect.top / (max || 1)));
    target = p * Math.max(0, N - 1);
    bar.style.width = `${p * 100}%`;
  };
  window.addEventListener('scroll', readScroll, { passive: true });

  // ---- leaf-fly transition to project page ----
  let opening = false;
  const openProject = (c, p) => {
    if (opening) return;
    opening = true;
    window.__pauseFx = true;
    const r = c.el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;

    const R = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));
    const veil = document.createElement('div');
    veil.style.cssText = `position:fixed;z-index:999;left:${cx - R}px;top:${cy - R}px;width:${R * 2}px;height:${R * 2}px;border-radius:50%;background:${p.theme === 'light' ? '#FDF6EC' : '#1C1026'};transform:scale(0);will-change:transform;pointer-events:none;`;
    document.body.appendChild(veil);
    veil.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 950, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' });

    const art = c.el.querySelector('.art');
    if (art) {
      const a = art.getBoundingClientRect();
      const acx = c.flipped ? cx : a.left + a.width / 2;
      const acy = c.flipped ? cy : a.top + a.height / 2;
      const scaleNow = c.el.offsetWidth ? r.width / c.el.offsetWidth : 1;
      const h0 = art.offsetHeight * Math.min(1, Math.max(.6, scaleNow));
      const big = preloaded[HERO_ART[p.page]];
      const useBig = big && big.complete && big.naturalWidth;
      const ratio = useBig ? big.naturalWidth / big.naturalHeight : (art.naturalWidth / art.naturalHeight || art.offsetWidth / art.offsetHeight || 0.507);
      const w0 = h0 * ratio;

      const small = innerWidth <= 900;
      const boxH = small ? Math.min(innerHeight * 0.64, innerWidth * 1.12) : innerHeight * 0.82;
      const H1 = boxH * 1.4;
      const tcx = innerWidth / 2, tcy = innerHeight * ((small ? 0.15 : 0.09) + 0.24) + H1 / 2;

      const fly = document.createElement('img');
      fly.src = useBig ? big.src : art.src;
      fly.style.cssText = `position:fixed;z-index:1000;left:${acx - w0 / 2}px;top:${acy - h0 / 2}px;width:${w0}px;height:${h0}px;transform-origin:50% 50%;will-change:transform;pointer-events:none;`;
      document.body.appendChild(fly);
      art.style.visibility = 'hidden';
      const tilt = -8;
      fly.animate([
        { transform: `translate(0,0) scale(1) rotate(${tilt}deg)` },
        { transform: `translate(${tcx - acx}px, ${tcy - acy}px) scale(${H1 / h0}) rotate(0deg)` },
      ], { duration: 1100, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' });
    }
    try { sessionStorage.setItem('wg-from-card', '1'); } catch (e) {}
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      location.href = p.page;
    }, 1150);
  };
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      document.querySelectorAll('body > div[style*="z-index:999"], body > img[style*="z-index:1000"]').forEach((n) => n.remove());
      document.querySelectorAll('.card .art').forEach((n) => { n.style.visibility = ''; });
      opening = false;
      window.__pauseFx = false;
    }
  });

  // ---- proximity flip (for populated project cards only) ----
  const NEAR = 40, FAR = 90;
  let mouse = null;
  const setFlip = (c, v) => {
    if (!c.flippable) return;
    if (c.flipped !== v) { c.flipped = v; c.el.classList.toggle('flipped', v); }
  };
  const checkProximity = () => {
    if (!mouse || !canHover || (drag && drag.active)) return;
    cards.forEach((c) => {
      if (!c.flippable) return;
      if (Math.abs(c.d) > 1.6) { setFlip(c, false); return; }
      const r = c.el.getBoundingClientRect();
      const dx = Math.max(r.left - mouse.x, 0, mouse.x - r.right);
      const dy = Math.max(r.top - mouse.y, 0, mouse.y - r.bottom);
      const dist = Math.hypot(dx, dy);
      setFlip(c, c.flipped ? dist < FAR : dist < NEAR);
    });
  };
  window.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') mouse = { x: e.clientX, y: e.clientY }; });
  document.addEventListener('pointerleave', () => { mouse = null; cards.forEach((c) => setFlip(c, false)); });

  // ---- build cards for Main Categories or a specific Category ----
  const syncTabs = (catId) => {
    catTabs.querySelectorAll('.cat-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.cat === catId);
    });
  };

  const buildView = (cat) => {
    activeCatId = cat ? cat.id : '';
    const isMain = !cat;
    showcase.classList.toggle('view-category', !isMain);
    showcase.classList.toggle('view-main', isMain);
    backBtn.hidden = isMain;
    syncTabs(activeCatId);

    if (isMain) {
      document.title = 'JXverse — Projects';
      bwLine1.textContent = 'PROJECTS';
      bwLine2.textContent = '&ACTIVITIES';
      hintEl.textContent = canHover ? 'Scroll or drag ← → · click centre card to open' : 'Swipe ← → · tap centre card to open';
      items = CATEGORIES;
    } else {
      const cleanName = cat.title.replace(/\n/g, ' ');
      document.title = `JXverse — ${cleanName}`;
      bwLine1.textContent = cat.bgLines[0];
      bwLine2.textContent = cat.bgLines[1] || '';
      hintEl.textContent = canHover ? 'Scroll or drag ← → · hover a card to flip' : 'Swipe ← → · tap a card to flip';
      items = cat.projects.slice(0, 4);
    }

    N = items.length;
    totalEl.textContent = pad(N);
    track.innerHTML = '';

    cards = items.map((item, i) => {
      const el = document.createElement('article');
      let flippable = false;

      if (isMain) {
        const filledCount = item.projects.filter((p) => !p.blank).length;
        el.className = 'card is-category';
        el.tabIndex = 0;
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', `${item.title.replace(/\n/g, ' ')} — open category`);
        el.style.setProperty('--cover', item.color);
        if (item.accent) el.style.setProperty('--accent-c', item.accent);
        if (item.ink) el.style.setProperty('--ink-c', item.ink);
        const titleHtml = esc(item.title).replace(/\n/g, '<br>');
        el.innerHTML = `
          <div class="card-inner">
            <div class="face front">
              ${item.art ? `<img class="art ${item.artClass || ''}" src="${esc(item.art)}" alt="" draggable="false">` : ''}
              ${item.svg && CATEGORY_SVGS[item.svg] ? CATEGORY_SVGS[item.svg] : ''}
              <div class="row">
                <span class="num">${pad(i + 1)}</span>
                <span class="cat-count">${filledCount ? `${filledCount} / 4` : '4 slots'} →</span>
              </div>
              <div><h2>${titleHtml}</h2></div>
            </div>
          </div>`;
      } else {
        const isBlank = Boolean(item.blank);
        flippable = !isBlank;
        el.className = 'card is-project'
          + (isBlank ? ' is-blank' : '')
          + (item.theme === 'light' ? ' theme-light' : '')
          + (item.font ? ' font-' + item.font : '');
        el.tabIndex = 0;
        el.setAttribute('aria-label', isBlank ? `Slot ${pad(i + 1)} — blank` : `${item.title} — ${item.tag || ''}`);
        el.style.setProperty('--cover', item.color);
        if (item.accent) el.style.setProperty('--accent-c', item.accent);
        if (item.pill) el.style.setProperty('--pill', item.pill);
        if (item.ink) el.style.setProperty('--ink-c', item.ink);

        const modeBadge = item.mode
          ? `<span class="mode mode-${item.mode}">${item.mode === 'team'
              ? '<svg viewBox="0 0 16 12" aria-hidden="true"><circle cx="5" cy="3.4" r="2.4"/><circle cx="11" cy="3.4" r="2.4"/><path d="M0.6 11.4c0-2.6 2-4.4 4.4-4.4s4.4 1.8 4.4 4.4zM6.6 11.4c0-2.6 2-4.4 4.4-4.4s4.4 1.8 4.4 4.4z"/></svg>Teamwork'
              : '<svg viewBox="0 0 16 12" aria-hidden="true"><circle cx="8" cy="3.4" r="2.6"/><path d="M3.4 11.4c0-2.7 2.1-4.6 4.6-4.6s4.6 1.9 4.6 4.6z"/></svg>Individual'}</span>`
          : '';

        const tagHtml = item.tag !== undefined
          ? (item.tag ? `<span class="tag">${esc(item.tag)}</span>` : '<span class="tag tag-empty" aria-hidden="true"></span>')
          : '';

        if (isBlank) {
          el.innerHTML = `
            <div class="card-inner">
              <div class="face front">
                <div class="row">
                  <span class="num">${pad(i + 1)}</span>
                  ${tagHtml}
                </div>
                <div></div>
              </div>
            </div>`;
        } else {
          const isExternal = item.link && /^https?:\/\//.test(item.link);
          const linkAttrs = isExternal ? ' target="_blank" rel="noopener"' : '';
          el.innerHTML = `
            <div class="card-inner">
              <div class="face front">
                ${item.art ? `<img class="art ${item.artClass || ''}" src="${esc(item.art)}" alt="" draggable="false">` : ''}
                <div class="row">
                  <span class="num">${pad(i + 1)}</span>
                  ${tagHtml}
                  ${modeBadge}
                </div>
                <div>
                  <h2>${esc(item.title)}</h2>
                  ${item.year ? `<div class="year">${esc(item.year)}</div>` : ''}
                </div>
              </div>
              <div class="face back">
                <span class="num">${pad(i + 1)}${item.tag ? ` — ${esc(item.tag)}` : ''}</span>
                <h3>${esc(item.title)}</h3>
                ${item.summary ? `<p>${esc(item.summary)}</p>` : ''}
                ${item.stack && item.stack.length ? `<div class="chips">${item.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>` : ''}
                <dl>
                  ${item.role ? `<dt>Role</dt><dd>${esc(item.role)}</dd>` : ''}
                  ${item.year ? `<dt>Year</dt><dd>${esc(item.year)}</dd>` : ''}
                </dl>
                ${item.link && item.link !== '#' ? `<a class="more" href="${esc(item.link)}"${linkAttrs}>View project →</a>` : ''}
              </div>
            </div>`;
        }
      }

      track.appendChild(el);
      const cardObj = { el, flipped: false, flippable, d: 0 };

      el.addEventListener('click', (e) => {
        if (dragged) { e.preventDefault(); return; }
        if (isMain) {
          if (Math.abs(cardObj.d) > 0.5) { scrollToCard(i); return; }
          navigateTo(item.id, true);
          return;
        }
        if (e.target.closest('.more')) {
          if (item.page) { e.preventDefault(); openProject(cardObj, item); }
          return;
        }
        if (Math.abs(cardObj.d) > 0.5) { scrollToCard(i); return; }
        if (item.blank) return;
        if (item.page && (canHover || cardObj.flipped)) { openProject(cardObj, item); return; }
        if (!canHover) setFlip(cardObj, !cardObj.flipped);
        else if (item.link && item.link !== '#') {
          if (/^https?:\/\//.test(item.link)) window.open(item.link, '_blank', 'noopener');
          else location.href = item.link;
        }
      });

      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isMain) navigateTo(item.id, true);
          else if (flippable) setFlip(cardObj, !cardObj.flipped);
        }
      });
      el.addEventListener('focus', () => scrollToCard(i));

      return cardObj;
    });

    sizeSection();
    window.scrollTo({ top: 0, behavior: 'auto' });
    target = 0;
    pos = 0;
    lastIdx = -1;
    t0 = performance.now() + 140;
    readScroll();
  };

  const navigateTo = (catId, pushHistory) => {
    const cat = findCategory(catId);
    const targetId = cat ? cat.id : '';
    if (pushHistory) {
      const url = targetId ? `projects.html?category=${encodeURIComponent(targetId)}` : 'projects.html';
      try { history.pushState({ category: targetId }, '', url); } catch (e) {}
    }
    buildView(cat);
  };

  window.addEventListener('popstate', () => {
    navigateTo(getCatFromUrl(), false);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') scrollToCard(Math.min(N - 1, Math.round(pos) + 1));
    if (e.key === 'ArrowLeft') scrollToCard(Math.max(0, Math.round(pos) - 1));
    if (e.key === 'Escape' && activeCatId) {
      const pill = document.getElementById('jxPill');
      if (!pill || !pill.classList.contains('open')) navigateTo('', true);
    }
  });

  // ---- swipe / drag left & right (original inertial rubber-band physics) ----
  let drag = null, dragged = false, snapTimer = 0;
  const spacingNow = () => Math.max((cards[0]?.el.offsetWidth || 260) * 1.08, window.innerWidth * 0.3);

  pin.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || e.target.closest('.more, .btn, .jx-nav, .back-pill, .cat-tabs, a, button')) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, start: target, lastX: e.clientX, lastT: performance.now(), v: 0, active: false };
    dragged = false;
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.active) {
      if (Math.abs(dx) < 6) return;
      if (Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
      drag.active = true; dragged = true;
      pin.classList.add('dragging');
      pin.setPointerCapture?.(e.pointerId);
      cards.forEach((c) => setFlip(c, false));
    }
    const now = performance.now();
    drag.v = 0.8 * drag.v + 0.2 * ((e.clientX - drag.lastX) / Math.max(1, now - drag.lastT));
    drag.lastX = e.clientX; drag.lastT = now;
    const t = drag.start - dx / spacingNow();
    const over = t < 0 ? t : t > N - 1 ? t - (N - 1) : 0;
    window.scrollTo({ top: topFor(t - over * 0.65), behavior: 'auto' });
    target = t - over * 0.65;
  });
  const endDrag = (e) => {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.active) {
      const fling = -drag.v * 1.2;
      scrollToCard(Math.round(target + Math.max(-1, Math.min(1, fling))));
      pin.classList.remove('dragging');
    }
    drag = null;
    setTimeout(() => { dragged = false; }, 0);
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // trackpad horizontal swipe / shift+wheel -> move cards + gentle settle
  window.addEventListener('wheel', (e) => {
    const h = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (h) { e.preventDefault(); window.scrollBy({ top: h * 1.4, behavior: 'auto' }); }
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      const r = showcase.getBoundingClientRect();
      if (!drag && r.top <= 0 && r.bottom >= innerHeight && Math.abs(target - Math.round(target)) > 0.02) {
        scrollToCard(Math.round(target));
      }
    }, 180);
  }, { passive: false });

  // ---- initial render ----
  navigateTo(getCatFromUrl(), false);
  requestAnimationFrame(() => document.body.classList.remove('intro'));

  // ---- render loop (exact original floating inertial physics) ----
  const render = (now) => {
    if (window.__pauseFx || !cards.length) { requestAnimationFrame(render); return; }
    pos += (target - pos) * 0.09;
    const vw = window.innerWidth;
    const cardW = cards[0].el.offsetWidth;
    const spacing = Math.max(cardW * 1.08, vw * 0.3);

    cards.forEach((c, i) => {
      const d = i - pos;
      c.d = d;
      const ad = Math.abs(d);
      const k = Math.min(ad, 3);

      const intro = ease(Math.min(1, Math.max(0, (now - t0 - (i - Math.round(pos)) * 120 - Math.max(0, ad) * 60) / 1100)));

      const x = d * spacing;
      const y = d * cardW * 0.2 + k * k * 10 + (1 - intro) * -220;
      const rz = -5 + d * 8;
      const ry = Math.max(-35, Math.min(35, -d * 22));
      const s = 1 - k * 0.13;
      const blur = Math.max(0, ad - 0.35) * 3.2;
      const op = Math.max(0, 1 - Math.max(0, ad - 1.8) * 0.9) * intro;

      c.el.style.transform = `translate3d(${x}px, ${y}px, ${-k * 120}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`;
      c.el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : 'none';
      c.el.style.opacity = op.toFixed(3);
      c.el.style.zIndex = String(100 - Math.round(ad * 10));
      c.el.style.pointerEvents = op < 0.2 ? 'none' : 'auto';
    });

    const idx = Math.max(0, Math.min(N - 1, Math.round(pos)));
    if (idx !== lastIdx) {
      lastIdx = idx;
      curEl.textContent = pad(idx + 1);
      const curItem = items[idx];
      if (!activeCatId) {
        captionEl.textContent = curItem.title.replace(/\n/g, ' ');
      } else {
        captionEl.textContent = curItem.blank
          ? `Slot ${pad(idx + 1)}${curItem.tag ? ` · ${curItem.tag}` : ''}`
          : `${curItem.title}${curItem.tag ? ` · ${curItem.tag}` : ''}`;
      }
    }
    bigword.style.transform = `translateX(${(0.5 - pos / Math.max(1, N - 1)) * 30}%)`;

    checkProximity();
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // ---- stars ----
  const cv = document.getElementById('stars');
  const ctx = cv.getContext('2d');
  let stars = [];
  const makeStars = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round(innerWidth * innerHeight / 14000) }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.6 + 0.4, p: Math.random() * Math.PI * 2, s: 0.5 + Math.random(),
    }));
  };
  makeStars();
  window.addEventListener('resize', makeStars);
  const drawStars = (t) => {
    if (window.__pauseFx) { requestAnimationFrame(drawStars); return; }
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const st of stars) {
      ctx.globalAlpha = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t / 900 * st.s + st.p));
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fillStyle = '#D9D9D9'; ctx.fill();
    }
    requestAnimationFrame(drawStars);
  };
  requestAnimationFrame(drawStars);
})();
