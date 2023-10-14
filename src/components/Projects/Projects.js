import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Health care App', description: 'It is used to book appointments with best doctors and also to order prescribed medicines.' },
  { id: 2, title: 'Smart Knee braces', description: 'This project was created by me for our engineering clinics which monitors the deformations and movements of the knee and sends an alert to the user. This project was built as a college project with a team of 6 people where my responsibility was to develop an application using MIT.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;
