import React from 'react'
import person from './assets/person-icon.png'
import search from './assets/search.png'

const Header = () => {
  return (
    <div className='header-box'>
        <div className = 'header'>
        <h1>Health Map</h1>
        <nav className='nav-bar'>
            <img src ={person} width = '25px'/>
            <img src ={search} width = '25px'/>
        </nav>
        </div>
    </div>
  )
}

export default Header
