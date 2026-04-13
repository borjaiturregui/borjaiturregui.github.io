/* reveal.js — Animaciones de aparición por scroll con IntersectionObserver
   Autor: Borja Iturregui — borjaiturregui.github.io */

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observador.observe(el));
