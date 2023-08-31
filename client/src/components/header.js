import React, { useEffect, useState } from 'react';

import Particle from './particle';
import '../App.css';

const Header = ({ isAuthenticated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <nav className='nav'>
      <a href='/' className='site-title'>AstroLog</a>
      <ul>
        <li>
          <a href='/horoscope'>Horoscope</a>
        </li>
        <li>
          <a href='/tarot'>Tarot Reading</a>
        </li>
        <li>
          <a href='/journal'>Journal Entries</a>
        </li>
        <li>
          {isLoggedIn ? (
            <a href='/logout'>Log Out</a>
          ) : (
            <a href='/login'>Log In</a>
          )}
        </li>
      </ul>
      <Particle className="particle-background"></Particle>
    </nav>
  );
};

export default Header;