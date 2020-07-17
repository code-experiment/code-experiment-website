import React from 'react'
import { withRouter } from "react-router";

import HomeLinks from './HomeLinks'
import UtilitiesLinks from './UtilitiesLinks';

const nav = (props) => {
  const handleClick = (id) => {
    var elmnt = document.getElementById(id)
    elmnt.scrollIntoView({ behavior: 'smooth', block: "start" })
  }

  const handleHomeClick = () => {
    if (props.location.pathname === '/') {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: "start" })
    } else {
      props.history.push('/')
    }
  }

  const whichLinks = () => {
    if (props.location.pathname === '/') {
      return <HomeLinks handleClick={handleClick}/>
    } else if (props.location.pathname.includes('/utilities')) {
      return <UtilitiesLinks />
    } else {
      return null
    }
  }
  
  return (
    <div className="nav-bar-wrapper">
      <div className="container nav-bar-container">
        {/* <div className="logo-container" onClick={() => handleClick("about")}> */}
        {/* <div className="logo-container" onClick={() => props.history.push('/')}> */}
        <div className="logo-container" onClick={handleHomeClick}>
          Code Expirement
        </div>

        <nav className="links-outer-wrapper">
          <div className="links-inner-wrapper">
            {whichLinks()}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(nav)