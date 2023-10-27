import 'bulma/css/bulma.css';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './tabs/Home';
import Loader from './components/Loader';
import NotFoundPage from './pages/NotFoundPage';

function renderLazyComponent(path) {
  const LazyComponent = lazy(() => import(`${path}`));
  return <LazyComponent />;
}

const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch(
      'https://olhasheliakina.github.io/cms-app_backendless/data/tabsData.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setTabs(data);
      })
      .catch((error) => {
        console.error('Error has occured while fetching data:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <Navigation tabs={tabs} />
      </header>

      <main className='has-text-grey-lighter'>
        <div style={{ height:'81vh'}}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route index element={<Navigate to='/home' replace />} />
              {tabs.map((tab) => (
                <Route
                  key={tab.id}
                  path={`${tab.id}`}
                  element={renderLazyComponent(tab.path)}
                />
              ))}
              <Route
                path='*'
                element={
                 <NotFoundPage />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </main>

      <footer className='footer has-background-dark is-bottom is-fixed py-6'>
        <div className='content has-text-centered is-medium has-text-light'>
          <p>&copy; Company Name</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
