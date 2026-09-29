# scrollcraft

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

**Una skill de Claude Code que crea sitios web premium impulsados por el desplazamiento y los somete a un estándar de diseño real.**

## 📖 Guía de uso

Guía completa (landing + paso a paso): **https://inematds.github.io/scroll-craft/guia/es/**

La mayoría de los sitios web generados por IA fallan en una de dos direcciones. O son correctos y fáciles de olvidar, o tienen una animación de desplazamiento llamativa, con texto de cuerpo en una proporción de 2.1:1, un titular que ocupa seis líneas en un teléfono y las mismas seis secciones que aparecen en cualquier otra página hecha con IA. scrollcraft está diseñado para no fallar de ninguna de esas maneras: trata la **interacción** y la **ejecución** como una sola tarea, no como dos.

[![MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)
[![Claude Code plugin](https://img.shields.io/badge/Claude%20Code-plugin-d97757.svg)](https://code.claude.com/docs/en/plugins)

---

## Tres creaciones, tres páginas completamente distintas

La misma skill, el mismo motor, ninguna estructura compartida. Las diferencias de abajo no son temas: son gramáticas de página distintas, modelos de navegación distintos y finales distintos.

### Orrery · una práctica de viajes
Un solo mundo ininterrumpido. Toda la página es un escenario fijo: caes en un modelo a escala de la Tierra hecho a mano, llegas a Kioto, cruzas hacia la Patagonia y el Sahara, y vuelves a subir al banco de trabajo donde empezaste. No hay límites entre secciones.

![Orrery, un recorrido de desplazamiento por un mundo continuo](media/orrery.webp)

### PERKFORM · un café con proteínas
Un plano secuencia cinematográfico que, a mitad de la página, corta en seco a dos escenarios invertidos a sangre. Ruidosa, centrada en el producto y la única de las tres que alza la voz.

![PERKFORM, una página de producto cinematográfica en plano secuencia](media/perkform.webp)

### Fallowbank · un estudio de diseño y construcción de paisajes
Serena, documental, sobria. Texto al estilo de una ficha de museo sobre fotografías reales, y un cierre que es una línea de texto continuo en lugar de un botón.

![Fallowbank, una página documental sobria](media/fallowbank.webp)

---

## Lo que hace realmente

**Interacción, participación y originalidad irrepetible**

- **El desplazamiento es la línea de tiempo.** El video avanza o retrocede fotograma a fotograma con la rueda, las secciones quedan fijas mientras avanza su argumento, los carruseles se desplazan hacia los lados, los titulares se ensamblan línea por línea, el fondo de la página cambia de color a medida que avanzas y el puntero mueve elementos que no están desplazándose.
- **Ocho gramáticas de página mutuamente excluyentes.** Plano secuencia cinematográfico, editorial por capítulos, superficie viva, mundo continuo, póster tipográfico, galería, escenario dividido y secuencia rítmica de cortes. Cada una *prohíbe* lo que las demás requieren, así que dos creaciones no pueden terminar pareciéndose sin que te des cuenta.
- **Un movimiento distintivo obligatorio.** Cada creación inventa una interacción a medida que solo existe en ese sitio. Cambiar el color de un foco no cuenta.
- **Un control de huella digital.** Una nueva creación debe diferir de todas las páginas que ya hayas hecho en al menos 4 de 6 dimensiones: gramática, navegación, hero, estructura de actos, cierre y movimiento distintivo. Si no pasa, cambias el plan, no el registro.

**Ejecución y la sensación real de la página**

- **Una curva emocional antes de que exista cualquier acto.** Una línea por acto: la emoción y lo que aparece en pantalla para provocarla. Si dos actos adyacentes transmiten la misma emoción, uno de ellos sobra.
- **Un único clímax diseñado.** La regla del pico y el final, aplicada literalmente. El clímax recibe el presupuesto de recursos, el silencio que lo precede y el mayor espacio de desplazamiento. Una página con tres clímax no tiene ninguno.
- **Un estándar mínimo de tipografía.** Dos familias como máximo, espaciado entre letras que se estrecha a medida que crece el tamaño, medida de 45 a 75ch, interlineado inversamente proporcional a la medida y compensación en tres ejes para texto claro sobre fondo oscuro.
- **Una escala de espaciado con ritmo real.** Base de 4px, más espacio arriba que abajo de un encabezado y relleno fluido en las secciones para que un teléfono no herede el espacio de escritorio.
- **Color con seis funciones y un acento**, texto secundario teñido en lugar de gris uniforme, nada de negro puro y una excepción documentada para páginas que cortan en seco entre fondos claros y oscuros.
- **Profundidad como cinco recursos, no uno.** Sombras desplazadas, luz en los bordes, escala y desenfoque como distancia, superposición y grano.
- **Las pautas de marca son insumos, no decoración.** Indícale un kit de marca y prevalecerán sus reglas estrictas, incluso las que prohíban cosas que la skill usaría de otro modo.
- **Una lista de cosas que rechaza.** Cuadrículas idénticas de tarjetas de funcionalidades, contadores `01 / 06`, indicaciones de desplazamiento, texto con degradado, rayas largas, estadísticas inventadas, paneles falsos, degradados morados de IA y la paleta artesanal de crema y latón que usa por defecto cada marca de productos hechos a mano.

**Revisa su propio trabajo**

Un navegador sin interfaz recorre la página terminada en cada posición de desplazamiento, espera a que se estabilice el cabezal de reproducción del video e informa sobre:

- **desplazamiento sin efecto**: desplazamiento que no cambia nada en pantalla
- **indicaciones que nunca alcanzan la opacidad total**: texto que el lector solo puede ver atenuado
- **contraste medido en la página compuesta**, línea por línea, en el fotograma más brillante que pasa por debajo, con la dirección elegida para cada línea para evaluar correctamente tanto el texto claro sobre fondo oscuro como el oscuro sobre fondo claro
- **tramos detenidos en un póster**: un clip que nunca llegó a decodificarse y parece exactamente una película en pausa

Después genera una hoja de contacto, porque una máquina puede demostrar que una página funciona, pero no decirte si tiene sentido.

---

## Instalación

```bash
/plugin marketplace add inematds/scroll-craft
```
```bash
/plugin install main-design
```

Luego úsala describiendo lo que quieres o invócala directamente:

```
/main-design:scrollcraft
```

Si el resumen de instalación dice `Run /reload-plugins to activate.`, ejecútalo.

Para trabajar en la skill sin instalarla:

```bash
claude --plugin-dir ./plugins/main-design
```

## Primera ejecución

```bash
node scripts/doctor.mjs              # verificación previa: indica exactamente qué falta
node scripts/workspace.mjs --ensure  # crea tu espacio de trabajo y un registro vacío
```

Ejecuta `doctor` antes que cualquier otra cosa. De lo contrario, los tres fallos de configuración más comunes aparecen más adelante como errores engañosos: un ffmpeg recortado informa que falta un filtro como si fuera un error de sintaxis en *tu* comando, la ausencia del muxer WebP aparece como un nombre de archivo incorrecto y `playwright-core` se resuelve desde el directorio equivocado.

## Requisitos

| | Por qué | Notas |
| --- | --- | --- |
| **Node 18+** | todos los scripts | |
| **Una compilación completa de ffmpeg** | para codificar clips y que se puedan *recorrer* fotograma a fotograma en lugar de reproducirse | Algunas cadenas de herramientas ponen en PATH un ffmpeg recortado con ~50 filtros y sin `scale`. `doctor` encuentra una compilación completa si existe; `SCROLLCRAFT_FFMPEG` la reemplaza. |
| **`playwright-core` + Chrome** | la verificación | `npm i playwright-core` **en la carpeta de compilación** |
| **`KIE_AI_API_KEY`** | solo si quieres que se *generen* recursos | Opcional. Crear una página con tus propias fotos y videos no requiere clave ni gasto, y es una opción de primera clase. Consulta `.env.example`. |

## El espacio de trabajo

Tus creaciones y tu registro de huellas digitales viven en un mismo directorio, que se resuelve en lugar de suponerse. Se usa la primera opción que coincida:

1. `SCROLLCRAFT_HOME`
2. el `.scrollcraft.json` más cercano al recorrer hacia arriba desde el directorio actual: `{ "workspace": "path/to/builds" }`
3. `<project root>/scrollcraft`

Las creaciones se guardan en `<workspace>/builds/<name>/`; tu registro está en `<workspace>/FINGERPRINTS.md`.

**Tu registro empieza vacío, y eso es correcto.** El control existe para evitar que te repitas, así que la primera creación no tiene nada que superar y todas las siguientes sí. [`EXAMPLES.md`](EXAMPLES.md) contiene la tabla de doce filas del autor, incluida para que veas cómo luce un registro completo y qué formas suelen coincidir. Es una ilustración, no una restricción.

## Qué contiene

```
plugins/main-design/
└── skills/scrollcraft/
    ├── SKILL.md            el procedimiento: entrevista, gramática, evaluación, creación y verificación
    ├── references/
    │   ├── uniqueness.md   ocho gramáticas de página, el movimiento distintivo, el control de huella digital
    │   ├── feel.md         la curva emocional, el clímax diseñado, la comprobación de sensaciones
    │   ├── devices.md      nueve recursos de desplazamiento y el contrato de indicaciones
    │   ├── worldflight.md  modo de mundo continuo: un escenario fijo, sin uniones
    │   ├── worlds.md       dirección de arte y el método de preámbulo de estilo
    │   ├── taste.md        el estándar de diseño: espaciado, tipografía, color, profundidad, movimiento
    │   ├── assets.md       generación, movimientos de cámara, codificación para el desplazamiento fotograma a fotograma
    │   ├── verify.md       el entorno de pruebas y lo que no puede decirte
    │   └── template.html   una estructura inicial, no un diseño
    ├── engine/             scrollcraft.js + .css. El mecanismo, nunca se edita para cada proyecto
    ├── templates/          el registro vacío con el que se inicializa un espacio de trabajo nuevo
    └── scripts/            doctor · workspace · kie · encode · serve · shoot · worldflight-assert
```

Vale la pena leer por separado [`CHANGELOG.md`](plugins/main-design/skills/scrollcraft/CHANGELOG.md): registra qué falló en cada creación y la regla que surgió de ello, en lugar de ser una lista de funciones.

## La regla más importante

El motor es el mecanismo y **nunca se edita para cada proyecto**. Dale estilo con seis tokens de color y dos fuentes, escribe tu propio HTML semántico y usa la propiedad personalizada `--sc-p` que publica el motor para controlar cualquier elemento a medida. Un entorno de ejecución que construye la página a partir de un objeto de configuración es exactamente la razón por la que todos los sitios creados con él terminan pareciéndose.

## Limitaciones reales

- **Solo se ha ejecutado en Windows.** Los scripts buscan ffmpeg y Chrome en ubicaciones de Windows, macOS y Linux, pero no se ha hecho ninguna compilación en una Mac. `SCROLLCRAFT_FFMPEG` y `SCROLLCRAFT_CHROME` reemplazan la búsqueda.
- **El video generado no es gratis.** Un recorrido continuo de diez tramos implica un gasto real. Una página creada con tus propios recursos no cuesta nada.
- **Tiene opiniones marcadas a propósito.** Rechazará los diseños y las paletas que hacen reconocibles las páginas de IA y discutirá contigo sobre el clímax. Si quieres una página que se vea como todas las demás, esta no es la herramienta adecuada.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
