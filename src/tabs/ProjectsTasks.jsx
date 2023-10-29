import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getData } from '../utils/fetch';

const ProjectsTasks = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    getData('projectsData.json')
    .then((data) =>{
      setProjectsData(data.projectsTasks)
    })
    .catch((error) => {
      console.error('Error has occured while getting data:', error);
    })
  }, []);

  return (
    <section className='section is-medium p-2'>
      <h3 className='title has-text-centered'>Projects Tasks</h3>
      <ol>
        {projectsData.map((project) => (
            <li key={project.id}
            className={classNames({
              'has-text-info': project.status === 'Completed',
              'has-background-danger-light has-text-info': project.status === 'In Progress',
            })}>
              <span className='mx-6'>{project.name}</span>
              <span>{project.status}</span>
              <span className='mx-6'>{project.projectName}</span>
            </li>
        ))}
      </ol>
    </section>
  );
};

export default ProjectsTasks;
