import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Your Company Name',
    duration: '2023 - Present',
    description: [
      'Developed responsive web applications using React.js and modern JavaScript',
      'Collaborated with cross-functional teams to deliver high-quality user experiences',
      'Implemented best practices for code quality and performance optimization'
    ]
  },
  // Add more experiences as needed
];

const Experience = () => (
  <SectionWrapper id="experience" title="Experience">
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item mb-4 p-3 border rounded">
          <h4 className="text-primary">{exp.title}</h4>
          <h5 className="text-secondary">{exp.company}</h5>
          <p className="text-muted small">{exp.duration}</p>
          <ul>
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
