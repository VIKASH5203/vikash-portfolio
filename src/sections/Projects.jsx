import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCarousel from '../components/ProjectCarousel';

const projects = [
  {
    title: 'Mind-Verse',
    description: 'A multi-user blog platform with authentication, built with Node.js and MongoDB.',
    link: 'https://github.com/VIKASH5203/mind_verse'
  },
  {
    title: 'Day-Scheduler',
    description: 'A web-based task management tool built using EJS and MongoDB.',
    link: 'https://github.com/VIKASH5203/Day-Scheduler'
  }
];

const Projects = () => (
  <SectionWrapper id="projects" title="Projects">
    <ProjectCarousel projects={projects} />
  </SectionWrapper>
);

export default Projects;
