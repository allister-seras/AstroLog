import React, { useEffect } from 'react';
import '../App.css';

const Footer = (props) => { 
  return (
    <footer>
      <div className="footer-content">
        <p>AstroLog is brought to you by The Capybara Cosmonauts</p>
        <div className="logo">
          <img src="assets/images/CC_Logo.png" alt="Capybara Cosmonauts Logo" width="120px" />
        </div>
        <div className="team-members">
          <p>Allister Seras Kalag, Amanda Monroy, Leonela Ludeña, Nathan Sabin, & Michael O'Sullivan</p>
        </div>
        <div className="github-link">
          <a href="https://github.com/allister-seras/AstroLog">GitHub Repository</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;