# borjaiturregui.github.io

Portfolio personal de Borja Iturregui — administración de sistemas y redes.

Sitio estático (HTML/CSS/JS) desplegado en GitHub Pages. Presenta el perfil
técnico, áreas de trabajo y proyectos. Sin framework ni dependencias de build.

## Estructura

```
.
├── index.html              # Página principal (perfil, áreas, proyectos)
├── aviso-legal.html        # Aviso legal (LSSI-CE)
├── privacidad.html         # Política de privacidad (RGPD)
├── cookies.html            # Política de cookies
├── favicon.svg
├── og-image.png
├── robots.txt
├── sitemap.xml
└── assets/
    ├── fonts/              # Rajdhani y JetBrains Mono (woff2, servidas localmente)
    ├── css/
    │   ├── fonts.css       # @font-face de las tipografías locales
    │   ├── base.css        # Variables, reset, fondo, animaciones
    │   ├── nav.css         # Navegación
    │   ├── hero.css        # Cabecera y botones
    │   ├── sections.css    # Perfil, áreas y proyectos
    │   ├── footer.css      # Pie de página
    │   ├── cookies.css     # Banner de cookies y elementos legales
    │   └── legal.css       # Páginas legales
    └── js/
        ├── nav.js          # Menú móvil
        ├── reveal.js       # Animación de aparición al hacer scroll
        ├── consent.js      # Consentimiento y carga condicional de GA4 (en el <head>)
        ├── cookies.js      # Banner de cookies
        └── cookies-page.js # Botón de retirar consentimiento (cookies.html)
```

## Identidad visual

Estética terminal oscura según la guía de marca personal v3:
fondo negro, acento rojo vino (#7B1A2E / #B22948), tipografías
Rajdhani (interfaz) y JetBrains Mono (datos técnicos y prompt `> borja`).

## Privacidad

Google Analytics 4 se carga únicamente tras consentimiento explícito
en el banner de cookies; al retirarlo se borran las cookies `_ga`.
Las tipografías se sirven desde el propio sitio (sin Google Fonts).
El sitio no tiene formularios ni recoge datos introducidos por el usuario.

## Seguridad

Cada página declara una Content-Security-Policy en un `<meta>` (GitHub Pages
no permite cabeceras propias). No hay scripts ni estilos en línea: cualquier
script o estilo nuevo debe ir en `assets/`, y cualquier dominio externo nuevo
debe añadirse a la CSP de la página correspondiente.
