import { useRef, useState } from 'react';

import Header from './components/Header.jsx';
import AQIMap from './components/maps/AQIMap.jsx';
import Map from './components/maps/Map.jsx';
import PollenMap from './components/maps/PollenMap.jsx';
import Sidebar from './components/Sidebar.jsx';
import Summary from './components/Summary.jsx';

import './App.css';

function App() {
  const [summaryInfo, setSummaryInfo] = useState(
    [
      {
        allergy: false,
        respiratory: false,
        immuneSystem: false
      },
      {
        pollenTolerance: 25,
        airQualityTolerance: 25,
        radiationTolerance: 25,
        covidTolerance: 25,
        fluTolerance: 25,
      }
    ]);
  const [showSummary, setShowSummary] = useState(false);
  const [currentMap, setCurrentMap] = useState('default');
  
  const summaryRef = useRef();

  const displaySummary = (vulnerabilities, tolerances) => {
    setShowSummary(true);
    setSummaryInfo(summaryInfo[0] = vulnerabilities)
    setSummaryInfo(summaryInfo[1] = tolerances)

  
    // setTimeout "next tick" hack
    setTimeout(() => {
      summaryRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    });
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
      {showSummary && (
        <Summary summaryRef={summaryRef} summarInfo = {summaryInfo}/>
      )}
    </>
  );
}

export default App;
