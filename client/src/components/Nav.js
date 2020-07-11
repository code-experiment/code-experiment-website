import React from 'react'

import '../styles/NavStyles.css';

export default () => {
  const handleAboutClick = () => {
    var elmnt = document.getElementById("about");
    elmnt.scrollIntoView();
  }

  const handleEventsClick = () => {
    var elmnt = document.getElementById("upcoming-events");
    elmnt.scrollIntoView();
  }

  const handleSlackClick = () => {
    var elmnt = document.getElementById("slack");
    elmnt.scrollIntoView();
  }

  const handleContactClick = () => {
    var elmnt = document.getElementById("contact-form");
    elmnt.scrollIntoView();
  }

  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        Code Expirement
      </div>

      <nav className="links-outer-wrapper">
        <ul className="links-inner-wrapper">
          <div className="link-wrapper">
            <button onClick={handleAboutClick} className="link">About</button>
          </div>

          <div className="link-wrapper">
            <button onClick={handleEventsClick} className="link">Events</button>
          </div>
          
          <div className="link-wrapper">
            <button onClick={handleSlackClick} className="link">Slack</button>
          </div>

          <div className="link-wrapper">
            <button onClick={handleContactClick} className="link">Contact</button>
          </div>
        </ul>
      </nav>
    </div>
  )
}