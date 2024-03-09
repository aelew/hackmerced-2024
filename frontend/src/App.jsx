import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header.jsx'
import './App.css'  
import Functionality from './Functionality.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Functionality/>
    </>
  )
}

export default App
