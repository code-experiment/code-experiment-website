import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <>
      <div className="link-wrapper">
        <NavLink to="/utilities">Utilities</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink to="/utilities/timer">Timer</NavLink>
      </div>
      <div className="link-wrapper">
        <NavLink to="/utilities/randomizer">Randomizer</NavLink>
      </div>
    </>
  )
}