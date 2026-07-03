# borjaiturregui.github.io

Portfolio personal de Borja Iturregui — administración de sistemas y redes.

Sitio estático (HTML/CSS/JS) desplegado en GitHub Pages. Presenta el perfil
técnico, áreas de trabajo y proyectos. Sin framework ni dependencias de build.

## Estructura

```
.
├── index.html              # Página principal (perfil, áreas, proyectos, contacto)
├── aviso-legal.html        # Aviso legal (LSSI-CE)
├── privacidad.html         # Política de privacidad (RGPD)
├── cookies.html            # Política de cookies
├── favicon.svg
├── og-image.png
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   ├── base.css        # Variables, reset, fondo, animaciones
    │   ├── nav.css         # Navegación
    │   ├── hero.css        # Cabecera y botones
    │   ├── sections.css    # Perfil, áreas y proyectos
    │   ├── contact.css     # Formulario de contacto
    │   ├── footer.css      # Pie de página
    │   └── cookies.css     # Banner de cookies y elementos legales
    └── js/
        ├── nav.js          # Menú móvil
        ├── reveal.js       # Animación de aparición al hacer scroll
        ├── contact.js      # Envío del formulario (Google Apps Script)
        └── cookies.js      # Consentimiento y carga condicional de GA4
```

## Identidad visual

Estética terminal oscura según la guía de marca personal v3:
fondo negro, acento rojo vino (#7B1A2E / #B22948), tipografías
Rajdhani (interfaz) y JetBrains Mono (datos técnicos y prompt `> borja`).

## Privacidad

Google Analytics 4 se carga únicamente tras consentimiento explícito
en el banner de cookies. El formulario de contacto envía los datos a
Google Apps Script.
