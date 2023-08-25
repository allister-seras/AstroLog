import react, { useEfect, useEffect } from 'react'
import Particle from './particle';
import '../App.css';

const Header = (props) => {

  return (
      <nav className='nav'>
          <a href='/' className='site-title'>AstroLog</a>
          <ul>
            <li >
              <a href=''>Horoscope</a>
            </li>
            <li >
              <a href=''>Tarot Reading</a>
            </li>
            <li >
              <a href=''>Journal Entries</a>
            </li>
            <li >
              <a href=''>Log In</a>
            </li>
          </ul>
        <Particle className="particle-background"></Particle>
      </nav>
  )
}

export default Header;