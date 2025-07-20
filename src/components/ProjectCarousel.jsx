import React, { useState } from 'react';
import '../styles/ProjectCarousel.scss';

const ProjectCarousel = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  return (
    <div className="project-carousel d-flex flex-column align-items-center">
      <div className="carousel-card">
        <h4>{projects[index].title}</h4>
        <p>{projects[index].description}</p>
        <a href={projects[index].link} target="_blank" rel="noreferrer">View Project</a>
      </div>
      <div className="carousel-controls d-flex gap-3 mt-3">
        <button onClick={prev}>⟨</button>
        <button onClick={next}>⟩</button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
