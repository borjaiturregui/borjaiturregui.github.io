/* contact.js — Envío del formulario de contacto a Google Apps Script
   Autor: Borja Iturregui — borjaiturregui.github.io */

const URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbwWkDV17-ZTbuq0EMcqB2pix3DQcVxKEuTh1mP7Rl_sOlVJPRt1JT3YaMJ8rWjiDDNA8Q/exec';

const SERVICIOS = {
  'web':           'Web o tienda online nueva',
  'mantenimiento': 'Mantenimiento de web existente',
  'otro':          'No lo tengo claro aún'
};

document.getElementById('formContacto').addEventListener('submit', async function(evento) {
  evento.preventDefault();

  const nombre   = document.getElementById('nombre').value.trim();
  const email    = document.getElementById('email').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje  = document.getElementById('mensaje').value.trim();
  const honeypot = document.getElementById('_hp').value;
  const boton    = document.getElementById('btnEnviar');
  const divError = document.getElementById('formError');

  // Estado de carga
  boton.innerHTML = 'Enviando...';
  boton.disabled = true;
  divError.classList.remove('visible');

  const datosFormulario = {
    nombre,
    email,
    servicio: SERVICIOS[servicio] || servicio,
    mensaje,
    _honeypot: honeypot
  };

  try {
    const respuesta = await fetch(URL_SCRIPT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(datosFormulario)
    });

    const datos = await respuesta.json();

    if (datos.ok === true) {
      document.getElementById('formContacto').classList.add('hidden');
      document.getElementById('formExito').classList.add('visible');
    } else {
      divError.textContent = datos.error || 'Error al enviar el mensaje. Inténtalo de nuevo.';
      divError.classList.add('visible');
    }
  } catch (error) {
    divError.textContent = 'Error de conexión. Inténtalo de nuevo más tarde.';
    divError.classList.add('visible');
  } finally {
    boton.innerHTML = 'Enviar mensaje <span class="btn-arrow">→</span>';
    boton.disabled = false;
  }
});
