import { useAuth0 } from '@auth0/auth0-react';
import { TbHealthRecognition } from 'react-icons/tb';

import Search from './Search.jsx';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <div className="header-box">
      <div className="header">
        <div className="header-logo">
          <TbHealthRecognition size={32} />
          <h1>Mapnosis</h1>
        </div>
        <Search />
        <nav className="nav-bar">
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              flexDirection: 'column'
            }}
          >
            {user && (
              <span style={{ color: '#000', fontWeight: 500 }}>
                {user.name ?? user.nickname}
              </span>
            )}
            <button
              onClick={() =>
                isAuthenticated
                  ? logout({
                      logoutParams: { returnTo: window.location.origin }
                    })
                  : loginWithRedirect({
                      authorizationParams: {
                        audience: 'https://mapnosis.co/api/'
                      }
                    })
              }
              style={{
                backgroundColor: 'transparent',
                textAlign: 'right',
                marginLeft: 'auto',
                cursor: 'pointer',
                fontSize: '1rem',
                border: 'none'
              }}
            >
              {user ? <small>Log out</small> : <p>Log in with Auth0</p>}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
