/* reveal.js — Animaciones de aparición por scroll con IntersectionObserver
   Autor: Borja Iturregui — borjaiturregui.github.io */

(function () {
  var elementos = document.querySelectorAll('.reveal');
  var sinAnimacion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sin soporte o con movimiento reducido: mostrar todo directamente */
  if (!('IntersectionObserver' in window) || sinAnimacion) {
    elementos.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach(function (el) { observador.observe(el); });
})();
