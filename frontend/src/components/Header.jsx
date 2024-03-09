import person from '../assets/person-icon.png'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import Search from './Search.jsx'

const Header = () => {
  return (
    <div className='header-box'>
        <div className = 'header'>
        <h1>Health Map</h1>
        <Search />
        <nav className='nav-bar'>
            <img src ={person} width = '25px'/>
            <img src ={menu} width = '25px'/>
        </nav>
        </div>
    </div>
  )
}

export default Header
