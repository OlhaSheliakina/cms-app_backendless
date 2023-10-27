import React, { useEffect, useState } from 'react';

const ProjectsInfo = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('https://olhasheliakina.github.io/cms-app_backendless/data/projectsData.json')
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data.projectsInfo);
      })
      .catch((error) => {
        console.error('Error has occured while fetching data:', error);
      });
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'In Progress':
        return 'has-background-warning'; 
      case 'Completed':
        return 'has-text-success';
      case 'On Hold':
        return 'has-text-danger'; 
      default:
        return '';
    }
  };

  return (
    <section className='section is-medium has-text-centered'>
      <h3 className='title'>Projects Information</h3>
      <div className='table-container pt-6'>
        <table className='table is-fullwidth'>
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
