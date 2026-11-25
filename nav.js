/* Shared expanding pill navigation behaviour across JXverse pages */
(() => {
  const pill = document.getElementById('jxPill');
  const toggle = document.getElementById('jxDots');
  const contactBtn = document.getElementById('jxContactBtn');
  const contactPop = document.getElementById('jxContactPop');
  if (!pill || !toggle) return;

  const setOpen = (open) => {
    pill.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (!open && contactPop) contactPop.hidden = true;
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!pill.classList.contains('open'));
  });

  if (contactBtn && contactPop) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      contactPop.hidden = !contactPop.hidden;
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.jx-nav')) {
      setOpen(false);
    } else if (contactPop && !contactPop.hidden && !e.target.closest('#jxContactBtn') && !e.target.closest('#jxContactPop')) {
      contactPop.hidden = true;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactPop && !contactPop.hidden) {
        contactPop.hidden = true;
        return;
      }
      if (pill.classList.contains('open')) {
        setOpen(false);
      }
    }
  });
})();
