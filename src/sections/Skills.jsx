import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const skills = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Spring', 'AEM', 'MongoDB', 'MySQL'];

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map(skill => (
          <div key={skill} className="skill-badge">{skill}</div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
