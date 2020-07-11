import React from 'react'

import '../styles/NavStyles.css';

export default () => {
  const handleClick = (id) => {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView();
  }

  return (
    <div className="nav-bar-wrapper">
      <div className="container nav-bar-container">
        <div className="logo-container">
          Code Expirement
        </div>

        <nav className="links-outer-wrapper">
          <div className="links-inner-wrapper">
            <div className="link-wrapper">
              <button onClick={() => handleClick("about")} className="link">About</button>
            </div>

            <div className="link-wrapper">
              <button onClick={() => handleClick("upcoming-events")} className="link">Events</button>
            </div>
            
            <div className="link-wrapper">
              <button onClick={() => handleClick("slack")} className="link">Slack</button>
            </div>

            <div className="link-wrapper">
              <button onClick={() => handleClick("contact-form")} className="link">Contact</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}