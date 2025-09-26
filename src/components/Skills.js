import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'TypeScript' },
        { name: 'Vue.js' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Figma' },
        { name: 'Agile' }
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

