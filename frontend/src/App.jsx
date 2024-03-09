import Header from './components/Header.jsx';
import Map from './components/Map.jsx';
import Sidebar from './components/Sidebar.jsx';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Map />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
