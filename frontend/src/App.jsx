import Header from './components/Header.jsx';
import Map from './components/Map.jsx';
import Sidebar from './components/Sidebar.jsx';
import Summary from './components/Summary.jsx';
import { useState, useRef } from 'react';

import './App.css';

function App() {
  const[showSummary, setShowSummary] = useState(false)

  const displaySummary = () => {
    setShowSummary(true)
    window.scrollTo({
      left: 0, 
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header />
      <main>
        <Map />
        <Sidebar summaryState = {showSummary} onClick = {displaySummary}/>
      </main>
      {showSummary && <Summary />}
    </>
  );
}

export default App;
