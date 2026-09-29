/* cookies-page.js — Botón de retirar el consentimiento en cookies.html
   Autor: Borja Iturregui — borjaiturregui.github.io */

(function () {
  var boton = document.getElementById('btnRetirar');
  var aviso = document.getElementById('retirarOk');
  if (!boton || !window.Consentimiento) return;

  boton.addEventListener('click', function () {
    window.Consentimiento.rechazar();
    aviso.classList.add('visible');
    boton.disabled = true;
  });
})();
