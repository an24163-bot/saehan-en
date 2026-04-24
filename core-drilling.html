/* ============================================================
   Saehan Nanotech — English Website
   main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV: hamburger toggle ── */
  var hamburger = document.querySelector('.nav__hamburger');
  var mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ── NAV: mark active link ── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__dropdown a, .nav__mobile-link').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === currentPage || href.endsWith('/' + currentPage)) {
      a.classList.add('current');
    }
  });

  /* ── INTERSECTION OBSERVER: reveal ── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── SMOOTH scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
