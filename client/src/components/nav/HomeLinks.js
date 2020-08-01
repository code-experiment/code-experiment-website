import React from 'react';
import { Link } from 'react-router-dom'

import useWindowDimensions from '../../helpers/useWindowDimensions';

export default (props) => {
  const { height, width } = useWindowDimensions();
  const { isActive, setIsActive } = props

  const handleNavClick = (event) => {
    setIsActive(event.target.innerHTML)
    let elmnt = document.getElementById(event.target.innerHTML)
    console.log('height', height, 'width', width)
    // TODO:  I can't get the logic to work on this.
    // if (event.target.innerHTML === 'About' && width < 840 && height < 830) {
    if (event.target.innerHTML === 'About' && height < 830) {
      console.log('small')
      elmnt.scrollIntoView({ behavior: 'smooth', block: "start" })
    } else {
      elmnt.scrollIntoView({ behavior: 'smooth', block: "end" })
    }
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