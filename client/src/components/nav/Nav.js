import React, { useState } from 'react'
import { withRouter } from "react-router";

import HomeLinks from './HomeLinks'
import UtilitiesLinks from './UtilitiesLinks';

export default withRouter((props) => {
  const [isActive, setIsActive] = useState('About')

  const handleHomeClick = () => {
    if (props.location.pathname === '/') {
      setIsActive('About')
      document.getElementById('About').scrollIntoView({ behavior: 'smooth', block: "start" })
    } else {
      setIsActive('About')
      props.history.push('/')
    }
  }

  const whichLinks = () => {
    if (props.location.pathname === '/') {
      return <HomeLinks isActive={isActive} setIsActive={setIsActive}/>
    } else if (props.location.pathname.includes('/utilities')) {
      return <UtilitiesLinks />
    } else {
      return null
    }
  }
  
  return (
    <div className="nav-bar-wrapper">
      <div className="container nav-bar-container">
        <div className="logo-container" onClick={handleHomeClick}>
          Code Expirement
        </div>
        <div className="links-inner-wrapper">
          {whichLinks()}
        </div>
      </div>
    </div>
  )
})