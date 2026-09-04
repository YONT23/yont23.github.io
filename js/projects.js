/* ==========================================================================
   projects.js — case study content for each project.
   Only confirmed information is included; anything unverified is marked
   explicitly as [DATO POR CONFIRMAR] rather than invented.
   ========================================================================== */

const CASE_STUDIES = {
  mcoop: {
    title: "MCoop",
    category: "Software empresarial · Gestión · Plataforma",
    problema: "Las cooperativas con las que trabajé necesitaban una plataforma propia para gestionar su operación en lugar de procesos manuales dispersos.",
    solucion: "Una plataforma de software desarrollada específicamente para cooperativas.",
    funcionalidades: "[DATO POR CONFIRMAR — detalle de módulos]",
    tecnologia: "[DATO POR CONFIRMAR]",
    rol: "Diseño y desarrollo de la plataforma.",
    estado: "🟢 En producción",
    resultado: "Plataforma activa, accesible en mcoop.institucioneducativasigloxxi.edu.co"
  },
  mlab: {
    title: "MLab",
    category: "Fitness Technology · Plataforma digital",
    problema: "Entrenadores y usuarios necesitaban una forma digital de seguir planes de entrenamiento y confirmar la técnica correcta de cada ejercicio.",
    solucion: "Una plataforma de entrenamiento digital, desarrollada, probada y en uso por algunos clientes.",
    funcionalidades: "Gestión de planes de entrenamiento y reproducción de video para visualizar la técnica de los ejercicios.",
    tecnologia: "HTML5, CSS3, JavaScript.",
    rol: "Diseño, desarrollo y mantenimiento del producto.",
    estado: "🔵 En uso",
    resultado: "Producto funcional, utilizado actualmente por clientes reales — probar en yont23.github.io/M/MLab.html"
  },
  mescolar: {
    title: "MEscolar",
    category: "EdTech · Gestión educativa",
    problema: "Instituciones educativas requerían centralizar la gestión académica y agilizar la generación de boletines.",
    solucion: "Plataforma de gestión escolar activa en instituciones educativas.",
    funcionalidades: "Centralización de notas y generación de boletines académicos.",
    tecnologia: "PHP, MySQL.",
    rol: "Desarrollo de la plataforma.",
    estado: "🔵 En uso",
    resultado: "100% de notas centralizadas, con ~80% menos tiempo dedicado a la generación de boletines. Acceso privado."
  },
  mnovedades: {
    title: "MNovedades",
    category: "EdTech · PWA · Gestión",
    problema: "Los equipos docentes necesitaban registrar novedades académicas y disciplinarias de forma ágil, incluso sin conexión constante.",
    solucion: "Aplicación web mobile-first para el registro de novedades.",
    funcionalidades: "Registro de novedades, almacenamiento local/offline, comunicación mediante WhatsApp.",
    tecnologia: "JavaScript puro, PWA.",
    rol: "Diseño y desarrollo de la aplicación.",
    estado: "🔵 En uso",
    resultado: "Disponible para probar en yont23.github.io/M/Novedad.html"
  },
  teacherai: {
    title: "Teacher AI",
    category: "IA · EdTech",
    problema: "La planeación y evaluación docente consume tiempo que podría dedicarse al aula.",
    solucion: "Solución de inteligencia artificial aplicada al trabajo docente.",
    funcionalidades: "Apoyo en planeación, generación de contenidos y evaluación por competencias.",
    tecnologia: "Python, GPT-4 API.",
    rol: "Diseño de la solución y de los prompts/flujos pedagógicos.",
    estado: "🔵 En uso",
    resultado: "~90% menos tiempo en planeación. Acceso privado."
  },
  mrunning: {
    title: "MRunning",
    category: "Mobile · Fitness · Running",
    problema: "[DATO POR CONFIRMAR]",
    solucion: "Aplicación móvil para registrar actividades de running.",
    funcionalidades: "Tiempo, distancia, ritmo/pace, registro de actividad, fotografía posterior a la actividad y personalización de la imagen con los resultados obtenidos.",
    tecnologia: "[DATO POR CONFIRMAR]",
    rol: "[DATO POR CONFIRMAR]",
    estado: "⚪ [DATO POR CONFIRMAR]",
    resultado: "[DATO POR CONFIRMAR]"
  },
  mfit: {
    title: "MFit Suite",
    category: "Performance Tech · SaaS · Analytics",
    problema: "Gimnasios necesitaban unificar recepción, caja y reportes en un solo lugar.",
    solucion: "SaaS de gestión deportiva con métricas físicas, planes y recepción.",
    funcionalidades: "Gestión de recepción, caja, reportes y métricas físicas, integrados en 3 módulos.",
    tecnologia: "[DATO POR CONFIRMAR]",
    rol: "Diseño y desarrollo de la plataforma.",
    estado: "🔵 En uso",
    resultado: "2+ gimnasios activos usando la plataforma hoy. La demo pública se prueba a través de MLab (yont23.github.io/M/MLab.html)."
  },
  sga: {
    title: "SGA Institutos",
    category: "Software administrativo · Gestión financiera",
    problema: "Instituciones necesitaban control de cartera y visibilidad del flujo de caja en tiempo real.",
    solucion: "Sistema administrativo-financiero para institutos de educación.",
    funcionalidades: "Control de cartera y flujo de caja en tiempo real.",
    tecnologia: "[DATO POR CONFIRMAR]",
    rol: "Desarrollo del sistema.",
    estado: "🔵 En uso",
    resultado: "100% de control de cartera y flujo de caja en tiempo real. Acceso privado."
  }
};
