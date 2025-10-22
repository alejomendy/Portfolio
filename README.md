Portfolio

Un portafolio web desarrollado con Create React App para mostrar proyectos, habilidades y experiencia.
Desarrollado por Alejo Mendy.

🚀 Características principales

Sitio web moderno construido con React, HTML y CSS.

Diseño responsivo, adaptado para escritorio, tabletas y móvil.

Sección de proyectos que muestra trabajos destacados.

Integración fácil para añadir futuras secciones (blog, testimonios, contactos).

Preparado para desplegar en producción mediante npm run build.

🧰 Tecnologías utilizadas

React (via Create React App)

HTML5 / CSS3

JavaScript (ES6+)

NPM / Node.js para gestión de dependencias

Estructura estándar de CRA (carpeta src/, archivo package.json, etc.)

⚙️ Instalación y arranque local

Clona el repositorio:

git clone https://github.com/alejomendy/Portfolio.git
cd Portfolio


Instala las dependencias:

npm install


Arranca el entorno de desarrollo:

npm start


Abre http://localhost:3000
 en tu navegador para ver la aplicación en funcionamiento.

Para producción:

npm run build


Esto creará una versión optimizada en la carpeta build/.

📁 Estructura del proyecto
Portfolio/
├── README.md
├── package.json
├── .gitignore
├── public/
│   └── … (archivos estáticos públicos)
└── src/
    ├── App.js
    ├── index.js
    ├── components/      ← componentes reutilizables
    ├── styles/          ← archivos CSS
    └── …  

✅ Buenas prácticas incluidas

Separación de lógica de componentes y estilos.

Uso de npm run build para generar artefactos listos para producción.

Uso del entorno de desarrollo local para testing y visualización rápida.

Preparado para añadir tests (npm test) aunque aún pueden incorporarse más pruebas específicas.

🔍 Cómo contribuir

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una sugerencia para mejorar el portafolio, puedes:

Hacer un fork del repositorio.

Crear una nueva rama (git checkout -b feature/nueva-sección).

Hacer tus cambios y confirmarlos (git commit -m "Agrega sección de blog").

Hacer push a tu rama (git push origin feature/nueva-sección).

Abrir un pull request para revisión