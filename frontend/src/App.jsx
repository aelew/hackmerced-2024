import { useState } from 'react';
import Header from './components/Header.jsx';
import Pollen from './components/Pollen.jsx';
import Map from './components/Map.jsx';
import Sidebar from './components/Sidebar.jsx';
import Summary from './components/Summary.jsx';
import AQI from './components/AQI.jsx'

import './App.css';

function App() {
  const [showSummary, setShowSummary] = useState(false);
  const[currentMap, setCurrentMap] = useState('default');

  const displaySummary = () => {
    setShowSummary(true);
  };

  return (
    <>
      <Header />
      <main>
        {currentMap === 'default' && <Map />}
        {currentMap === 'Pollen' && <Pollen />}
        {currentMap === 'Air Quality' && <AQI />}
        <Sidebar summaryState={showSummary} displaySummary={displaySummary} setMap = {setCurrentMap}/>
      </main>
      {showSummary && <Summary sumaryState={showSummary} />}
    </>
  );
}

export default App;
