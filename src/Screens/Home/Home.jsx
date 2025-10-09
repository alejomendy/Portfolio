import React from "react";
import "../../Styles/main.css";

export default function Home() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">AM</div>

        <div className="glass-menu">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </header>

      <section className="hero" id="about">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Foto de perfil"
          className="avatar"
        />
        <h1>
          Hola, soy Alejo Mendizabal
        </h1>
        <p>
          Desarrollador Full Stack con pasión por crear aplicaciones web fluidas,
          intuitivas y de alto rendimiento. Me especializo en el ecosistema
          JavaScript para construir experiencias de usuario memorables y
          vanguardistas.
        </p>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
        <div className="skill-list">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "CSS",
            "Flutter",
            "PostgreSQL",
          ].map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Proyectos Destacados</h2>
        <div className="project-cards">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4jeoGwEg75bRG24mFbBLgsv9nOU6dbI2eQ&s" alt="Proyecto 1" />
            <h3>Shinobi Data</h3>
            <p>
              Sitio web en el cual puede encontrar informacion sobre los
              personajes del anime Naruto.
            </p>
          </div>
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg" alt="Proyecto 2" />
            <h3>...</h3>
            <p>
              
            </p>
          </div>
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg" alt="Proyecto 3" />
            <h3>...</h3>
            <p>
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>¿Interesado en colaborar?</h2>
        <p>
          Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!
        </p>
        <button>Contáctame</button>
      </section>

      <footer>© 2025 Alejo Mendizabal. Todos los derechos reservados.</footer>
    </div>
  );
}
