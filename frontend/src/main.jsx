import { Auth0Provider } from '@auth0/auth0-react';
import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import { AppContextProvider } from './components/AppContextProvider.jsx';
// lol
import '@fontsource/geist-sans/100.css';
import '@fontsource/geist-sans/200.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-sans/800.css';
import '@fontsource/geist-sans/900.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </APIProvider>
    </Auth0Provider>
  </React.StrictMode>
);
