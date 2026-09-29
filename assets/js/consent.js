/* consent.js — Consentimiento de cookies y carga condicional de GA4
   Autor: Borja Iturregui — borjaiturregui.github.io

   Se carga en el <head> de forma síncrona para:
   1. Marcar <html class="js"> (las animaciones de aparición solo se activan con JS).
   2. Exponer window.Consentimiento, usado por cookies.js y la página de cookies.
   3. Cargar GA4 si el usuario ya lo aceptó y el <script> lleva data-autoload-ga. */

(function () {
  var GA_ID = 'G-2FGBBX9QL3';
  var CLAVE_STORAGE = 'cookies_consent';

  document.documentElement.classList.add('js');

  /* localStorage puede lanzar una excepción si el navegador bloquea el almacenamiento */
  function leer() {
    try {
      return localStorage.getItem(CLAVE_STORAGE);
    } catch (e) {
      return null;
    }
  }

  function guardar(valor) {
    try {
      localStorage.setItem(CLAVE_STORAGE, valor);
      return true;
    } catch (e) {
      return false;
    }
  }

  function cargarGA4() {
    if (window._ga4Cargado) return; // evita duplicados
    window._ga4Cargado = true;
    window['ga-disable-' + GA_ID] = false;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  /* Borra las cookies _ga y _ga_* en todos los ámbitos donde GA pudo crearlas */
  function borrarCookiesGA() {
    var host = location.hostname;
    var dominios = ['', host, '.' + host];
    document.cookie.split(';').forEach(function (par) {
      var nombre = par.split('=')[0].trim();
      if (nombre !== '_ga' && nombre.indexOf('_ga_') !== 0) return;
      dominios.forEach(function (dominio) {
        document.cookie = nombre + '=; Max-Age=0; path=/' + (dominio ? '; domain=' + dominio : '');
      });
    });
  }

  function aceptar() {
    guardar('aceptado');
    cargarGA4();
  }

  function rechazar() {
    guardar('rechazado');
    window['ga-disable-' + GA_ID] = true; // detiene GA si ya estaba cargado en esta página
    borrarCookiesGA();
  }

  window.Consentimiento = {
    leer: leer,
    aceptar: aceptar,
    rechazar: rechazar
  };

  var actual = document.currentScript;
  if (actual && actual.hasAttribute('data-autoload-ga') && leer() === 'aceptado') {
    cargarGA4();
  }
})();
