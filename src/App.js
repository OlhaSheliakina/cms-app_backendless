import 'bulma/css/bulma.css';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';

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
         
        </div>
      </main>
    </div>
  );
};

export default App;
