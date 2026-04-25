/**
 * cookies.js — Gestión del consentimiento de cookies
 *
 * Flujo:
 * 1. Al cargar la página, comprueba si ya hay una decisión guardada en localStorage.
 * 2. Si no hay decisión → muestra el banner.
 * 3. Si el usuario acepta → guarda 'aceptado', carga GA4 y oculta el banner.
 * 4. Si el usuario rechaza → guarda 'rechazado', oculta el banner. GA4 no se carga.
 *
 * GA4 también se carga al inicio (sin mostrar el banner) si el consentimiento
 * ya estaba guardado como 'aceptado' — eso se gestiona en el <head> del index.html.
 */

(function () {
  var CLAVE_STORAGE = 'cookies_consent';
  var banner = document.getElementById('cookieBanner');
  var btnAceptar = document.getElementById('cookieAceptar');
  var btnRechazar = document.getElementById('cookieRechazar');

  /* ── Comprueba si ya hay una decisión guardada ── */
  function obtenerConsentimiento() {
    return localStorage.getItem(CLAVE_STORAGE);
  }

  /* ── Carga GA4 dinámicamente ── */
  function cargarGA4() {
    if (window._ga4Cargado) return; // evita duplicados
    window._ga4Cargado = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2FGBBX9QL3';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-2FGBBX9QL3');
  }

  /* ── Muestra el banner ── */
  function mostrarBanner() {
    if (banner) {
      banner.classList.add('visible');
    }
  }

  /* ── Oculta el banner ── */
  function ocultarBanner() {
    if (banner) {
      banner.classList.remove('visible');
    }
  }

  /* ── Gestión del botón Aceptar ── */
  function onAceptar() {
    localStorage.setItem(CLAVE_STORAGE, 'aceptado');
    ocultarBanner();
    cargarGA4();
  }

  /* ── Gestión del botón Rechazar ── */
  function onRechazar() {
    localStorage.setItem(CLAVE_STORAGE, 'rechazado');
    ocultarBanner();
    /* GA4 no se carga. Si ya estuviese cargado (improbable), no podemos
       "descargarlo", pero al menos no se inicializa en futuras visitas. */
  }

  /* ── Inicialización ── */
  function init() {
    var consentimiento = obtenerConsentimiento();

    if (consentimiento === null) {
      /* Sin decisión → mostrar banner */
      mostrarBanner();
    }
    /* Si era 'aceptado', GA4 ya se cargó desde el <head> del index.html */
    /* Si era 'rechazado', no se hace nada */

    /* Eventos de los botones */
    if (btnAceptar) {
      btnAceptar.addEventListener('click', onAceptar);
    }
    if (btnRechazar) {
      btnRechazar.addEventListener('click', onRechazar);
    }
  }

  /* Ejecuta al cargar el DOM */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();