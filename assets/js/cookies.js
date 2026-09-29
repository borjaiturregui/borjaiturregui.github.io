/**
 * cookies.js — Banner de consentimiento de cookies
 *
 * Flujo:
 * 1. Si no hay decisión guardada → muestra el banner.
 * 2. Aceptar → guarda 'aceptado', carga GA4 y oculta el banner.
 * 3. Rechazar → guarda 'rechazado', borra cookies de GA y oculta el banner.
 *
 * La lógica de almacenamiento y carga de GA4 vive en consent.js
 * (cargado en el <head>), que también carga GA4 en visitas posteriores.
 */

(function () {
  var banner = document.getElementById('cookieBanner');
  var btnAceptar = document.getElementById('cookieAceptar');
  var btnRechazar = document.getElementById('cookieRechazar');

  if (!banner || !window.Consentimiento) return;

  function ocultarBanner() {
    banner.classList.remove('visible');
  }

  function init() {
    if (window.Consentimiento.leer() === null) {
      banner.classList.add('visible');
    }

    if (btnAceptar) {
      btnAceptar.addEventListener('click', function () {
        window.Consentimiento.aceptar();
        ocultarBanner();
      });
    }
    if (btnRechazar) {
      btnRechazar.addEventListener('click', function () {
        window.Consentimiento.rechazar();
        ocultarBanner();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
