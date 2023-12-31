import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getData } from '../utils/fetch';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectsProgress = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    getData('projectsData.json')
      .then((data) => {
        setProjectsData(data.projectsProgress);
      })
      .catch((error) => {
        console.error('Error has occured while getting data:', error);
      });
  }, []);

  const pieChartData = {
    labels: projectsData.map(
      (project) => {
        return `${project.name} - ${project.status}` || 'Unknown'
      }
    ),
    datasets: [
      {
        label: 'Progress',
        data: projectsData.map((project) => project.progress),
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)', 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className='section is-medium has-text-centered p-2'>
      <h3 className='title'>Projects Progress</h3>
      <div style={{ height: '300px' }}>
        <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </section>
  );
};

export default ProjectsProgress;
