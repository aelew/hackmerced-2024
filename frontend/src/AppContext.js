import { createContext, useContext } from 'react';

export const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within <AppContext.Provider>');
  }
  return context;
}
