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
    │   ├── sections.css    # Áreas, proyectos y contacto
    │   ├── footer.css      # Pie de página
    │   └── legal.css       # Páginas legales
    └── js/
        ├── nav.js          # Menú móvil
        ├── reveal.js       # Animación de aparición al hacer scroll
        └── init.js         # Marca <html class="js"> (en el <head>)
```

## Identidad visual

Estética terminal oscura según la guía de marca personal v3:
fondo negro, acento rojo vino (#7B1A2E / #B22948), tipografías
Rajdhani (interfaz) y JetBrains Mono (datos técnicos y prompt `> borja`).

## Privacidad

El sitio no usa cookies, analítica ni formularios, y no hace peticiones a
terceros: las tipografías se sirven desde el propio sitio.

## Seguridad

Cada página declara una Content-Security-Policy en un `<meta>` (GitHub Pages
no permite cabeceras propias). No hay scripts ni estilos en línea: cualquier
script o estilo nuevo debe ir en `assets/`, y cualquier dominio externo nuevo
debe añadirse a la CSP de la página correspondiente (y a la política de
privacidad si trata datos personales).
