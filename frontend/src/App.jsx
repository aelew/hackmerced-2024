import Header from './Header.jsx';
import Map from './components/Map.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Map />
        {/* right sidebar will go here */}
      </div>
    </>
  );
}

export default App;
