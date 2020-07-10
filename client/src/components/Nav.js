import React from 'react'

import '../styles/NavStyles.css';

export default () => {
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        Code Expirement
      </div>

      <nav className="links-outer-wrapper">
        <ul className="links-inner-wrapper">
          <div className="link-wrapper">
            <a href="#about" className="link">About</a>
          </div>

          <div className="link-wrapper">
            <a href="#events" className="link">Events</a>
          </div>
          
          <div className="link-wrapper">
            <a href="#slack" className="link">Slack</a>
          </div>

          <div className="link-wrapper">
            <a href="#contact-form" className="link">Contact</a>
          </div>
        </ul>
      </nav>
    </div>
  )
}