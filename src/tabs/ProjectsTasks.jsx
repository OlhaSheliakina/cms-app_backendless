import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ProjectsTasks = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/projectsData.json')
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data.projectsTasks);
      })
      .catch((error) => {
        console.error('Error has occured while fetching data:', error);
      });
  }, []);
  return (
    <section className='section is-medium'>
      <ol>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={classNames({
              'has-text-success': project.status === 'Completed',
              'has-background-warning': project.status === 'In Progress',
            })}
          >
            <li key={project.id}>
              <span className='mx-6'>{project.name}</span>
              <span>{project.status}</span>
              <span className='mx-6'>{project.projectName}</span>
            </li>
          </div>
        ))}
      </ol>
    </section>
  );
};

export default ProjectsTasks;
