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
      title: 'Crazy Carabao E-Commerce Platform',
      description: 'A Shopify e-commerce platform for crazycarabao.ph',
      image: '/resources/2.png',
      technologies: ['Shopify', 'Liquid', 'HTML', 'CSS'],
      live: 'https://crazycarabao.ph',
      featured: true
    },
    {
      id: 3,
      title: 'VeritasPay Philippines Inc.',
      description: 'A website for VeritasPay Philippines Inc.',
      image: '/resources/3.png',
      technologies: ['WordPress', 'HTML', 'CSS'],
      live: 'https://veritaspay.com',
      featured: true
    },
    {
      id: 4,
      title: 'VeritasPay Hosted Checkout Shopify Plugin',
      description: 'A Shopify plugin for VeritasPay Philippines Inc.',
      image: '/resources/4.png',
      technologies: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://apps.shopify.com/veritaspay-hosted-checkout',
      featured: true
    },
    {
      id: 5,
      title: 'VeritasPay Hosted Checkout WordPress Plugin',
      description: 'A WordPress plugin for VeritasPay Philippines Inc.',
      image: '/resources/5.png',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://wordpress.org/plugins/veritaspay-hosted-checkout/',
      featured: true
    },
    {
      id: 6,
      title: 'Primeline Document Management System',
      description: 'Web Application to store all the records of documents in their warehouse using PHP, JS,  CSS, and MySQL queries. Over 150 people have used it.',
      image: '',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Primeline Leave System',
      description: 'Web Application to apply and monitor all filed leaves using PHP, JS,  CSS, and MySQL queries. Over 2000 people have used it so far, with 5000+ queries being saved.',
      image: '',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 8,
      title: 'GreenAcres Hydroseeding',
      description: 'A website for GreenAcres Hydroseeding.',
      image: '/resources/6.png',
      technologies: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://greenacres.com.ph/',
      featured: true
    },
    {
      id: 9,
      title: 'Initial Care Website & Backoffice',
      description: 'A website and backoffice for Initial Care.',
      image: '',
      technologies: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 10,
      title: 'Primeline Sales Report',
      description: 'Built a System Reporting web app that collects all sales from all the stores of Primeline.',
      image: '',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 11,
      title: 'Out of the Blue Resort Website',
      description: 'Built a Business website using PHP, JS,  CSS, and MySQL in Wordpress.',
      image: '/resources/7.png',
      technologies: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://outoftheblue.com.ph/',
      featured: true
    },
    {
      id: 12,
      title: 'Out of the Blue Resort Booking System',
      description: 'Built a Booking system using PHP, JS,  CSS, and MySQL in MODX',
      image: '',
      technologies: ['PHP', 'MODX', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 13,
      title: 'National Youth Commission Employee Management System',
      description: 'Built a Employee management system using PHP, JS,  CSS, and MySQL',
      image: '',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 14,
      title: 'Glenhams Pricing Web App',
      description: 'Built a web app using PHP, JavaScript, and CSS, integrating API connectivity with Odoo.',
      image: '',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
    },
    {
      id: 15,
      title: 'Glenhams Website',
      description: 'Built a E-Commerce and Business website using PHP, JS,  CSS, and MySQL in Wordpress.',
      image: '/resources/8.png',
      technologies: ['PHP', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://glenhams.com.ph/',
      featured: true
    },
    {
      id: 16,
      title: 'Glenhams Order, Sales & Inventory App',
      description: 'Built a web app using Laravel, PHP, JavaScript, and CSS, integrating API connectivity with WooCommerce.',
      image: '',
      technologies: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript'],
      live: '#',
      featured: true
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
