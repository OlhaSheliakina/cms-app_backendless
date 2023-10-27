import React, { lazy } from 'react';

export const ProjectsInfo = lazy(() => import('../tabs/ProjectsInfo.jsx'));
export const ProjectsTasks = lazy(() => import('../tabs/ProjectsTasks'));
export const ProjectsProgress = lazy(() => import('../tabs/ProjectsProgress'));

export function renderLazyComponent(tabId) {
  switch (tabId) {
    case 'projectsInfo':
    default:
      return <ProjectsInfo />;

    case 'projectsTasks':
      return <ProjectsTasks />;

    case 'projectsProgress':
      return <ProjectsProgress />;
  }
}
