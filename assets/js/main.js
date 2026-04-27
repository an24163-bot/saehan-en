/* Saehan Nanotech EN — main.js */
(function(){
  'use strict';

  /* Nav hamburger */
  var btn = document.querySelector('.snt-nav__hamburger');
  var mob = document.querySelector('.snt-nav__mobile');
  if(btn && mob){
    btn.addEventListener('click', function(){
      var o = mob.classList.toggle('open');
      btn.classList.toggle('open', o);
      document.body.style.overflow = o ? 'hidden' : '';
    });
  }

  /* Active nav link */
  var cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.snt-nav__dropdown a, .snt-mobile-link').forEach(function(a){
    var h = (a.getAttribute('href')||'').split('/').pop();
    if(h === cur) a.classList.add('snt-current');
  });

  /* IntersectionObserver reveal */
  var targets = document.querySelectorAll('[data-snt-reveal]');
  if(!('IntersectionObserver' in window)){
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function(el){ io.observe(el); });
})();
