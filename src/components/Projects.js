import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SammyJ E-Commerce Platform',
      description: 'A Shopify e-commerce platform for Sammyj.com.ph',
      image: '/resources/1.png',
      technologies: ['Shopify', 'Liquid', 'HTML', 'CSS'],
      live: 'https://sammyj.com.ph',
      featured: true
    },
    
    {
      id: 2,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and admin panel for content management.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      live: 'https://example.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <h3>{project.title}</h3>
                    <p>Project Screenshot</p>
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
