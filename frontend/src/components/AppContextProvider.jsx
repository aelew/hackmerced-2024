import { useState } from 'react';

import { AppContext } from '../AppContext';

export function AppContextProvider({ children }) {
  const [place, setPlace] = useState();
  return (
    <AppContext.Provider value={{ place, setPlace }}>
      {children}
    </AppContext.Provider>
  );
}
