import React from 'react';
import Project from './project';

function Portfolio() {
  return (
    <section>
      <h2>PMy React ortfolio</h2>
      <div className="projects">
        {/* Render projects dynamically */}
        <Project />
        <Project />
        <Project />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
