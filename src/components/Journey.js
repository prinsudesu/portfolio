import React from 'react';
import './Journey.css';

const Journey = () => {
  const journeyData = [
    {
      year: '2012',
      title: 'Started My Journey',
      description: 'Began learning game and web development with C++, C#, HTML, CSS, and JavaScript through self-learning and online forums.',
      type: 'milestone skill'
    },
    {
       year: '2013',
       title: 'Game Development',
       description: 'Started accepting game development projects through online forums.',
       type: 'milestone skill'
    },
    {
        year: '2016',
        title: 'On the Job Training',
        description: 'Worked as a Assistant Web Developer in a National Youth Commission.',
        type: 'career milestone'
    },
    {
      year: '2016 - 2021',
      title: 'First Professional Role',
      description: 'Landed my first job as a Full-Stack Web Developer / New Technology Data Analyst / System Administrator in a Primeline Products Philippines Inc.',
      type: 'career milestone'
    },
    {
      year: '2021 - 2023',
      title: 'Junior to Senior Developer',
      description: 'Promoted to Senior Developer role. Led multiple projects.',
      type: 'career milestone'
    },
    {
      year: '2024 - Present',
      title: 'Lead Developer',
      description: 'Exploring modern frameworks like React, Node.js, and microservices architecture. Building scalable web applications.',
      type: 'career current'
    }
  ];

  return (
    <section id="journey" className="journey section">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <div className="journey-content">
          <div className="timeline">
            {journeyData.map((item, index) => (
              <div key={index} className={`timeline-item ${item.type}`}>
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
