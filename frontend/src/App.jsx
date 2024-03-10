import { useAuth0 } from '@auth0/auth0-react';
import { useRef, useState } from 'react';

import Header from './components/Header.jsx';
import AQIMap from './components/maps/AQIMap.jsx';
import Map from './components/maps/Map.jsx';
import PollenMap from './components/maps/PollenMap.jsx';
import Sidebar from './components/Sidebar.jsx';
import Summary from './components/Summary.jsx';
import { getApiBaseUrl } from './lib/utils';

import './App.css';

function App() {
  const [settings, setSettings] = useState();
  const [showSummary, setShowSummary] = useState(false);
  const [currentMap, setCurrentMap] = useState('default');
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const summaryRef = useRef();

  const displaySummary = (vulnerabilities, tolerances) => {
    setSettings({ vulnerabilities, tolerances });

    if (isAuthenticated) {
      getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://mapnosis.co/api/'
        }
      }).then((accessToken) => {
        fetch(`${getApiBaseUrl()}/settings`, {
          body: JSON.stringify({ vulnerabilities, tolerances }),
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }).catch((err) => console.error('Failed to save settings:', err));
      });
    }

    setShowSummary(true);
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
      {showSummary && <Summary summaryRef={summaryRef} settings={settings} />}
    </>
  );
}

export default App;
