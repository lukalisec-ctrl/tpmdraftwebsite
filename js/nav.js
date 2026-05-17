/* ============================================
   NAV — Sticky header, mobile menu, dropdowns
   ============================================ */

(function () {
  'use strict';

  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  let lastScroll = 0;

  // ── Sticky scroll state ──────────────────────────────────────────
  function onScroll() {
    const y = window.scrollY;

    if (y > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // ── Mobile menu toggle ───────────────────────────────────────────
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on backdrop click
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    if (!toggle || !mobileMenu) return;
    toggle.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // ── Active nav link ──────────────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href === './' + currentPath)) {
      link.setAttribute('aria-current', 'page');
      link.style.color = 'var(--magenta)';
    }
  });

})();
