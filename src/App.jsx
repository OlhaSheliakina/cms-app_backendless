import 'bulma/css/bulma.css';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TabsPage from './pages/TabsPage';
import Footer from './components/Footer';
import { getData } from './utils/fetch';

const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    getData('tabsData.json')
    .then(setTabs)
    .catch((error) => {
      console.error('Error has occured while gettting data:', error);
    })
  }, []);

  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main className='has-text-grey-lighter' style={{ height: '85vh' }}>
          <div className='container'>
            <Routes>
              <Route path='home' element={<HomePage />} />
              <Route index element={<Navigate to='home' />} />
              <Route path='tabs'>
                <Route path=':tabId?' element={<TabsPage tabs={tabs} />} />
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
