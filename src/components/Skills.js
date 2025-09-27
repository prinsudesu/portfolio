import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: [
        'HTML/CSS', 'JavaScript', 'React', 'PHP', 'Python', 'Laravel', 'WordPress', 'Shopify', 'Bootstrap', 'Tailwind CSS', 'Livewire', 'GraphQL'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        'AWS', 'Azure', 'Google Cloud', 'Cloudflare', 'Heroku', 'VPS Hosting', 'Shared Hosting', 'cPanel', 'Plesk', 'Apache', 'Nginx', 'IIS'
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        'MySQL', 'PostgreSQL', 'SQLite', 'SQL Server', 'Git', 'Linux', 'Jira', 'Trello', 'Postman', 'Agile'
      ]
    },
    {
      title: 'Design & Development',
      skills: [
        'Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'Zeplin', 'C++', 'C#', 'DirectX', 'Visual Studio'
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
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
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

