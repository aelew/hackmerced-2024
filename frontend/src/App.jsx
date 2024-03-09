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
    console.log(showSummary)
  }

  return (
    <>
      <Header />
      <main>
        <Map />
        <Sidebar summaryState = {showSummary} onClick = {displaySummary}/>
      </main>
      {showSummary && <Summary sumaryState = {showSummary}/>}
    </>
  );
}

export default App;
