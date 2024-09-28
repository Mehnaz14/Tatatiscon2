import React, { useState } from 'react';
 // Ensure you import the Footer component

const KeyProjects = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Tata Tiscon is thankful for the opportunity to build the new Parliament Building. This Projects Eportises the aspiror of the worlds largest democracy And is India first parlament built after independence',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Tata Tiscon is involved in building the largest democracy\'s infrastructure.This Projects Eportises the aspiror of the worlds largest democracy And is India first parlament built after independence',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Epitomizing the aspirations of the world\'s largest democracy.This Projects Eportises the aspiror of the worlds largest democracy And is India first parlament built after independence',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
  };

  const handleNext = () => {
    setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
  };

  return (
    <>
    <div className="key-projects-background">
      <div className="key-projects-container">
        <div className="project-info">
          <h2>{projects[currentProject].title}</h2>
          <p>{projects[currentProject].description}</p>
        </div>
        <div className="slider-controls">
          <button onClick={handlePrev} className="prev-button"><span class="material-symbols-outlined">
arrow_circle_left
</span></button>
          <button onClick={handleNext} className="next-button"><span class="material-symbols-outlined">
arrow_circle_right
</span></button>
        </div>
      </div>
      
    </div>
    
    </>
  );
};

export default KeyProjects;