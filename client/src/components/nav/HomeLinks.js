import React from 'react';
import { Link } from 'react-router-dom'

const HomeLinks = (props) => {
  const { isActive, setIsActive } = props

  const handleNavClick = (event) => {
    setIsActive(event.target.innerHTML)

    var elementPosition = document.getElementById(event.target.innerHTML).offsetTop;

    // This works in Safari but doesn't do the smooth scroll
    window.scrollTo({
      top: elementPosition - 80, //add your necessary value
      behavior: "smooth"  //Smooth transition to roll
    });
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
      </div>
    </>
  )
}

export default HomeLinks;