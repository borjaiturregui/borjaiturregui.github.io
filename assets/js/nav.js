/* nav.js — Lógica del menú móvil con aria-expanded
   Autor: Borja Iturregui — borjaiturregui.github.io */

(function () {
  const botonMenu = document.getElementById('burger');
  const cajonMenu = document.getElementById('drawer');
  if (!botonMenu || !cajonMenu) return;

  function abrirMenu(estado) {
    botonMenu.classList.toggle('active', estado);
    cajonMenu.classList.toggle('open', estado);
    botonMenu.setAttribute('aria-expanded', estado);
  }

  botonMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    abrirMenu(!cajonMenu.classList.contains('open'));
  });

  cajonMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') abrirMenu(false);
  });

  document.addEventListener('click', (e) => {
    if (!botonMenu.contains(e.target) && !cajonMenu.contains(e.target)) abrirMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cajonMenu.classList.contains('open')) {
      abrirMenu(false);
      botonMenu.focus();
    }
  });
})();
