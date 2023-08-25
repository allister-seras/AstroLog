import react, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Particle from './particle';
import '../App.css';

const Header = () => {

  return (
      <nav className='nav'>
        <a href='/' className='site-title'>AstroLog</a>
        <ul>
            <li >
              <a href='/horoscope'>Horoscope</a>
            </li>
            <li >
              <a href='/tarot'>Tarot Reading</a>
            </li>
            <li >
              <a href='/home'>Journal Entries</a>
            </li>
            <li >
              <a href='/login'>Log In</a>
            </li>
          </ul>
      <Particle className="particle-background"></Particle>
      </nav>
  )
}

export default Header;