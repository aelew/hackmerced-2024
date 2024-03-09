import { useState } from 'react'
import Header from './Header.jsx'
import Functionality from './Functionality.jsx'
import Map from './components/Map.jsx'

import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Functionality/>
      <div className="container">
        <Map />
        {/* right sidebar will go here */}
      </div>
    </>
  );
}

export default App;
