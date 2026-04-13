/* nav.js — Lógica del menú móvil con aria-expanded
   Autor: Borja Iturregui — borjaiturregui.github.io */

const botonMenu = document.getElementById('burger');
const cajonMenu = document.getElementById('drawer');

function abrirMenu(estado) {
  botonMenu.classList.toggle('active', estado);
  cajonMenu.classList.toggle('open', estado);
  botonMenu.setAttribute('aria-expanded', estado);
}

botonMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  abrirMenu(cajonMenu.classList.contains('open') ? false : true);
});

cajonMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') abrirMenu(false);
});

document.addEventListener('click', (e) => {
  if (!botonMenu.contains(e.target) && !cajonMenu.contains(e.target)) abrirMenu(false);
});
