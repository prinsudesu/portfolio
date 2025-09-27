import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Bootstrap' },
        { name: 'Tailwind CSS' },
        { name: 'Alpine.js' },
        { name: 'Livewire' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP' },
        { name: 'GraphQL' },
        { name: 'Python' }
      ]
    },
    {
      title: 'Framework & CMS',
      skills: [
        { name: 'Laravel' },
        { name: 'WordPress' },
        { name: 'Shopify' }
      ]
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'Google Cloud' },
        { name: 'Cloudflare' },
        { name: 'Shared Hosting' },
        { name: 'VPS Hosting' },
        { name: 'Hostinger' },
        { name: 'Hostgator' },
        { name: 'Heroku' },
        { name: 'Namecheap' },
        { name: 'cPanel' },
        { name: 'Plesk' },
        { name: 'WHM' },
        { name: 'Apache' },
        { name: 'Nginx' },
        { name: 'IIS' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'SQLite' },
        { name: 'MySQL' },
        { name: 'SQL Server' },
        { name: 'PostgreSQL' }
      ]
    },
    {
      title: 'Design',
      skills: [
        { name: 'Figma' },
        { name: 'Zeplin' },
        { name: 'Canva' },
        { name: 'Adobe Photoshop' },
        { name: 'Adobe Premiere Pro' }
      ]
    },
    {
      title: 'Workflow Platforms',
      skills: [
        { name: 'Git' },
        { name: 'Linux' },
        { name: 'Agile' },
        { name: 'Jira' },
        { name: 'Trello' },
        { name: 'Postman' }
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'C++' },
        { name: 'C#' },
        { name: 'DirectX' },
        { name: 'Visual Studio' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

