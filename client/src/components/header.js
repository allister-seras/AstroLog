import React, { useEffect, useState } from 'react';

import Particle from './particle';
import '../App.css';
import Auth from '../utils/auth'

const Header = ({ isAuthenticated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  const logout = () => {
    Auth.logout();
  }

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
            <a onClick ={logout} href='/login'>Log Out</a>
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