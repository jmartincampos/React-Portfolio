import React from 'react';

function Project() {
  return (
    <div className="project">
      <h3>Project Title</h3>
      <img src="project-image.jpg" alt="Project" />
      <p>Description of the project.</p>
      <a href="#deployed-url" target="_blank" rel="noopener noreferrer">View Deployed</a>
      <a href="#github-url" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
