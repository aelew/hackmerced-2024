import { useState } from 'react';

import { AppContext } from '../AppContext';

export function AppContextProvider({ children }) {
  const [place, setPlace] = useState();
  const [airQualityIndexes, setAirQualityIndexes] = useState([]);
  const [pollenForecast, setPollenForecast] = useState([]);
  return (
    <AppContext.Provider
      value={{
        place,
        airQualityIndexes,
        pollenForecast,
        setPlace,
        setAirQualityIndexes,
        setPollenForecast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
