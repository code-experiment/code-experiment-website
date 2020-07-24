import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  const { isActive, setIsActive } = props

  const handleNavClick = (event) => {
    setIsActive(event.target.innerHTML)
    let elmnt = document.getElementById(event.target.innerHTML)
    elmnt.scrollIntoView({ behavior: 'smooth', block: "start" })
  }
  return (
    <>
      <div className="link-wrapper">
        <div
          onClick={(event) => handleNavClick(event)}
          className={`link ${isActive === 'About' ? 'active' : ''}`}
        >
          About
        </div>
      </div>

      <div className="link-wrapper">
        <div
          onClick={(event) => handleNavClick(event)}
          className={`link ${isActive === 'Events' ? 'active' : ''}`}
        >
          Events
        </div>
      </div>
      
      {/* <div className="link-wrapper">
        <div
          onClick={(event) => handleNavClick(event)}
          className={`link ${isActive === 'Slack' ? 'active' : ''}`}
        >
          Slack
        </div>
      </div> */}

      <div className="link-wrapper">
        <div
          onClick={(event) => handleNavClick(event)}
          className={`link ${isActive === 'Contact' ? 'active' : ''}`}
        >
          Contact
        </div>
      </div>

      <div className="link-wrapper">
        <Link
          to='/utilities'
          className="link"
        >
          Utilities
        </Link>
        {/* <div
          onClick={(event) => handleNavClick(event)}
          className={`link ${isActive === 'Contact' ? 'active' : ''}`}
        >
          Utilities
        </div> */}
      </div>
    </>
  )
}