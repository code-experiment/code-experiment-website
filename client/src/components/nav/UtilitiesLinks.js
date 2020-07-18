import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <>
      <div className="link-wrapper">
        <NavLink exact to="/utilities" className="link">Utilities</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink to="/utilities/timer" className="link">Timer</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink to="/utilities/randomizer" className="link">Randomizer</NavLink>
      </div>
    </>
  )
}