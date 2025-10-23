import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../../Styles/Proyects/Proyects.css'
import characterview from '../../assets/characterview.png';
import homeview from '../../assets/homeview.png';
import detailview from '../../assets/detailview.png';

export default function ProjectDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('descripcion');

  const projectsData = {
    1: {
      title: "Shinobi Data",
      description: "Sitio web completo donde puedes encontrar información detallada sobre los personajes del anime Naruto.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4jeoGwEg75bRG24mFbBLgsv9nOU6dbI2eQ&s",
      technologies: ["Typescript", "Sass", "Firebase", "API REST"],
      developers: "Alejo Mendizabal",
      gallery: [homeview, characterview, detailview ],
      code: "https://github.com/alejomendy/Portfolio",
      ver: "https://alejomendy.github.io/shinobi-data-react/"
    },
    2: {
     title: "Proyecto en Desarrollo",
      description: "Este proyecto está actualmente en desarrollo. ¡Pronto más información!",
      image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg",
      technologies: ["Por definir"],
      developers: "Alejo Mendizabal",
      gallery: []
    },
    3: {
      title: "Proyecto en Desarrollo",
      description: "Este proyecto está actualmente en desarrollo. ¡Pronto más información!",
      image: "https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_1280.jpg",
      technologies: ["Por definir"],
      developers: "Alejo Mendizabal",
      gallery: []
    }
  };

  const project = projectsData[id] || projectsData[1];

  return (
    <div className="project-details-container">
      <header className="header">
        <div className="logo">AM</div>
        <div className="glass-menu">
          <Link to="/">Inicio</Link>
          <a href="/#projects">Proyectos</a>
          <a href="/#contact">Contacto</a>
        </div>
      </header>
      <div className="content">
        <h1 className="page-title">
          Detalles del Proyecto: {project.title}
        </h1>
        <div className="hero-section">
          <div className="main-image-container">
            <img 
              src={project.image} 
              alt={project.title}
              className="main-image"
            />
          </div>
          <div className="hero-content">
            <h2 className="hero-title">{project.title}</h2>
            <p className="hero-description">
              {project.description}
            </p>
            <p className="author-info">
              <strong>Desarrolladores:</strong> {project.developers}
            </p>
          </div>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'descripcion' ? 'active' : ''}`}
            onClick={() => setActiveTab('descripcion')}
          >
            Descripción
          </button>
          <button 
            className={`tab-button ${activeTab === 'tecnologias' ? 'active' : ''}`}
            onClick={() => setActiveTab('tecnologias')}
          >
            Tecnologías
          </button>
          {project.gallery.length > 0 && (
            <button 
              className={`tab-button ${activeTab === 'galeria' ? 'active' : ''}`}
              onClick={() => setActiveTab('galeria')}
            >
              Galería
            </button>
          )}
        </div>
        <div className="tab-content">
          {activeTab === 'descripcion' && (
            <div className="description-section">
              <h3 className="section-title">Acerca del Proyecto</h3>
              <p className="paragraph">
                {project.description}
              </p>
              <p className="paragraph">
                Características principales:
              </p>
              <ul className="feature-list">
                <li>Interfaz intuitiva y moderna</li>
                <li>Diseño responsive para todos los dispositivos</li>
                <li>Optimización de rendimiento</li>
                <li>Experiencia de usuario fluida</li>
                <li>Código limpio y mantenible</li>
              </ul>
            </div>
          )}

          {activeTab === 'tecnologias' && (
            <div className="tech-section">
              <h3 className="section-title">Tecnologías Utilizadas</h3>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-card">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'galeria' && project.gallery.length > 0 && (
            <div className="gallery-section">
              <h3 className="section-title">Galería del Proyecto</h3>
              <div className="gallery">
                {project.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="action-buttons">
          <button
            className="primary-button"
            onClick={() => window.open(project.ver, '_blank', 'noopener,noreferrer')}
          >
            Ver
          </button>

          <button
            className="secondary-button"
            onClick={() => window.open(project.code, '_blank', 'noopener,noreferrer')}
          >
            Ver Código
          </button>
        </div>

        <div className="back-link">
          <Link to="/">← Volver al Portafolio</Link>
        </div>
      </div>
      <footer className="footer">
        © 2025 Alejo Mendizabal. Todos los derechos reservados.
      </footer>
    </div>
  );
}