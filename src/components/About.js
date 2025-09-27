import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate full-stack web developer with over 10 years of experience 
              creating digital solutions that make a difference. I specialize in building 
              responsive web applications using modern technologies like PHP, Laravel, 
              and cloud platforms.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Delivery Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
