/* Saehan Nanotech EN — main.js */
(function(){
  'use strict';

  /* Nav hamburger */
  var btn = document.querySelector('.snt-nav__hamburger');
  var mob = document.querySelector('.snt-nav__mobile');
  if(btn && mob){
    if(!mob.id) mob.id = 'snt-nav-mobile';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', mob.id);
    btn.addEventListener('click', function(){
      var o = mob.classList.toggle('open');
      btn.classList.toggle('open', o);
      btn.setAttribute('aria-expanded', o ? 'true' : 'false');
      document.body.style.overflow = o ? 'hidden' : '';
    });
  }

  /* Active nav link */
  var cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.snt-nav__dropdown a, .snt-mobile-link').forEach(function(a){
    var h = (a.getAttribute('href')||'').split('/').pop();
    if(h === cur) a.classList.add('snt-current');
  });

  var hasIO = ('IntersectionObserver' in window);
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* IntersectionObserver reveal */
  var revealTargets = document.querySelectorAll('[data-snt-reveal]');
  if(!hasIO){
    revealTargets.forEach(function(el){ el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.un