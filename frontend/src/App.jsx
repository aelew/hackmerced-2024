import { useState } from 'react';

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Summary from './components/Summary.jsx';

import './App.css';

import AQIMap from './components/maps/AQIMap.jsx';
import Map from './components/maps/Map.jsx';
import PollenMap from './components/maps/PollenMap.jsx';

function App() {
  const [showSummary, setShowSummary] = useState(false);
  const [currentMap, setCurrentMap] = useState('default');

  const displaySummary = () => {
    setShowSummary(true);
  };

  return (
    <>
      <Header />
      <main>
        {currentMap === 'default' && <Map />}
        {currentMap === 'Pollen' && <PollenMap />}
        {currentMap === 'Air Quality' && <AQIMap />}
        <Sidebar
          displaySummary={displaySummary}
          summaryState={showSummary}
          setMap={setCurrentMap}
        />
      </main>
      {showSummary && <Summary sumaryState={showSummary} />}
    </>
  );
}

export default App;
