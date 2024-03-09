import { useAuth0 } from '@auth0/auth0-react';

import person from '../assets/person-icon.png';
import search from '../assets/search.png';
import menu from '../assets/menu.png';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="header-box">
      <div className="header">
        <h1>Health Map</h1>
        <nav className="nav-bar">
          <button
            onClick={() =>
              isAuthenticated
                ? logout({ logoutParams: { returnTo: window.location.origin } })
                : loginWithRedirect()
            }
            style={{
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontSize: '1rem',
              border: 'none'
            }}
          >
            {isAuthenticated ? 'Log out' : 'Log in'}
          </button>
          <img src={person} width="25px" />
          <img src={search} width="25px" />
          <img src={menu} width="25px" />
        </nav>
      </div>
    </div>
  );
};

export default Header;
