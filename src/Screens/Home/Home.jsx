import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/main.css";
import perfil from "../../assets/imageperfil.jpg";

export default function Home() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Shinobi Data",
      description: "Sitio web en el cual puede encontrar informacion sobre los personajes del anime Naruto.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4jeoGwEg75bRG24mFbBLgsv9nOU6dbI2eQ&s"
    },
    {
      id: 2, 
      title: "Próximamente...",
      description: "",
      image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg"
    },
    {
      id: 3, 
      title: "Próximamente...",
      description: "",
      image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg"
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/proyecto/${projectId}`);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="logo">AM</div>
        <div className="glass-menu">
          <div onClick={() => handleNavClick('about')} style={{ cursor: 'pointer' }}>Sobre mí</div>
          <div onClick={() => handleNavClick('projects')} style={{ cursor: 'pointer' }}>Proyectos</div>
          <div onClick={() => handleNavClick('contact')} style={{ cursor: 'pointer' }}>Contacto</div>
        </div>
      </header>

      <section className="hero" id="about">
        <img
          src={perfil} 
          alt="Foto de perfil"
          className="avatar"
        />
        <h1>
          Hola, soy Alejo Mendizabal
        </h1>
        <p>
          Desarrollador Full Stack con pasión por crear aplicaciones web fluidas,
          intuitivas y de alto rendimiento. 
        </p>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
        <div className="skill-list">
          {[
            "Typescript",
            "React",
            "Node.js",
            "Firebase",
            "CSS",
            "Flutter",
            "PostgreSQL",
            "Dart",
            
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
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card"
              onClick={() => handleProjectClick(project.id)}
              style={{ cursor: 'pointer' }}
            >

              <img src={project.image} alt={project.title} /> 
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>¿Interesado en colaborar?</h2>
        <p>
          Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!
        </p>
        <button onClick={() => handleNavClick('contact')}>Contáctame</button> 
      </section>

      <footer>© 2025 Alejo Mendizabal. Todos los derechos reservados.</footer>
    </div>
  );
}