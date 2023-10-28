import React, { useEffect, useState } from 'react';
import { getData } from '../utils/fetch';

const ProjectsInfo = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    getData('projectsData.json')
    .then((data) =>{
      setProjectsData(data.projectsInfo)
    })
    .catch((error) => {
      console.error('Error has occured while gettting data:', error);
    })
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'In Progress':
        return 'has-background-danger-light has-text-info'; 
      case 'Completed':
        return 'has-text-info';
      case 'On Hold':
        return 'has-text-grey-light'; 
      default:
        return '';
    }
  };

  return (
    <section className='section is-medium has-text-centered p-2'>
      <h3 className='title'>Projects Information</h3>
      <div className='table-container pt-6'>
        <table className='table is-fullwidth has-background-info-light'>
          <thead>
            <tr>
              <th className='has-text-centered'>Project Name</th>
              <th className='has-text-centered'>Project Status</th>
              <th className='has-text-centered'>Project Start Date</th>
              <th className='has-text-centered'>Project End Date</th>
            </tr>
          </thead>
          <tbody>
          {projectsData.map((project) => (
            <tr key={project.id} className={getStatusClass(project.status)}>
              <td>{project.name}</td>
              <td>{project.status}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectsInfo;
