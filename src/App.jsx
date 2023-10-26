import 'bulma/css/bulma.css';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './tabs/Home';

const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/tabsData.json')
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

      <main>
        <div>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route index element={<Navigate to='/home' replace />} />
            {tabs.map((tab) => (
              <Route
                key={tab.id}
                path={`${tab.id}`}
                element={tab.title}
              />
            ))}
            <Route
              path='*'
              element={
                <h1 className='title has-text-centered m-6'>
                  Page was not found
                </h1>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
