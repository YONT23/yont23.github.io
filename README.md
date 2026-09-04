# MENDOZATIC 2.0 — Portafolio de Yonatha Mendoza

Rediseño completo del portafolio, construido en HTML5 + CSS3 + JavaScript puro,
sin frameworks ni dependencias externas (excepto Google Fonts). Listo para
desplegar en GitHub Pages.

## Estructura

```
/
├── index.html
├── css/
│   ├── style.css          (sistema de diseño + estilos base)
│   └── responsive.css     (ajustes móvil/tablet)
├── js/
│   ├── main.js             (navegación, filtros, casos de estudio, contacto)
│   └── projects.js         (contenido de cada caso de estudio)
├── img/
│   ├── profile/            (foto de perfil — agregar mifoto.png o similar)
│   ├── projects/           (capturas de proyectos)
│   └── clients/            (logos de clientes, si aplica)
└── README.md
```

## Cómo desplegarlo en GitHub Pages

1. Sube esta carpeta a un repositorio (puede ser el mismo `yont23.github.io` o uno nuevo).
2. Si usas un repo nuevo, en Settings → Pages activa "Deploy from branch" sobre `main` / `root`.
3. Agrega tus imágenes reales en `img/` (por ahora el sitio no depende de imágenes para funcionar — no hay `<img>` rotos).
4. Revisa la lista de **datos por confirmar** abajo antes de publicar.

## ⚠️ Datos marcados como [DATO POR CONFIRMAR]

Siguiendo tu regla de no inventar información, estos campos quedaron
explícitamente marcados en el sitio y deben completarse manualmente:

- **Número de WhatsApp** — en `js/main.js`, variable `WHATSAPP_NUMBER` (formato internacional sin `+`, ej. `573001234567`). También hay un texto visible en la sección de contacto.
- **Correo de contacto** — en `index.html`, enlace `#emailLink` (actualmente `mailto:correo@dominio.co`).
- **Universidad y año de grado** (Ingeniería de Sistemas) — sección Experiencia → Educación.
- **Institución certificadora y año** (Docente Bilingüe Certificado) — misma sección.
- **Estado y detalles de MRunning** (problema, tecnología, rol, resultado) — no aparecía en tu portafolio actual ni tenía estado confirmado en el prompt.
- **MAvisos** — mencionado como proyecto en desarrollo; no se agregaron funcionalidades porque no había evidencia pública.
- **Funcionalidades y stack técnico detallado** de MCoop, MEscolar, Teacher AI, MFit y SGA Institutos — se mantuvo solo lo confirmado por tu sitio actual o el prompt; los campos de tecnología específica quedaron abiertos.
- **CV descargable** — no se incluyó botón de descarga porque el enlace anterior era un placeholder (`TU_ID_AQUI`). Puedes agregarlo de nuevo en el hero cuando tengas la URL final.
- **GitHub** — se usó `https://github.com/yont23` a partir de tu usuario de GitHub Pages; confírmalo si tu perfil público es otro.

## Cómo agregar un proyecto nuevo

1. Agrega una tarjeta en `index.html` dentro de `#projectGrid`, copiando la estructura de un `<article class="project-card">` existente. Asigna `data-filter` con las categorías que apliquen (`educacion`, `software`, `ia`, `fitness`, `web`, `mobile`) y un `data-project` único.
2. Agrega su caso de estudio en `js/projects.js`, con la misma clave usada en `data-case`.
3. Si el proyecto es destacado, usa la clase `tier-1`; si es secundario, `tier-2`.

## Notas de diseño

- Tipografías: **Space Grotesk** (títulos) + **IBM Plex Sans** (cuerpo) + **IBM Plex Mono** (etiquetas técnicas y estados).
- Paleta: base azul marino casi negro, un solo acento azul dominante, y dos acentos secundarios (ámbar y verde azulado) usados con moderación para diferenciar visualmente las puertas Docente / Ingeniero / Productos.
- El único momento de animación orquestada está en las "puertas" del hero y en las transiciones de hover; el resto del sitio evita animaciones decorativas para priorizar legibilidad y performance.
