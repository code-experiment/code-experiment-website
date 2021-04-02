import React from "react";
import { Link } from "react-router-dom";

const Utilities = () => {
  return (
    <div className="utilities-wrapper shader">
      <h1>Utilities</h1>
      <div className="utilities-links-wrapper">
        <Link className="utilities-link" to='/utilities/randomizer'>Randomizer</Link>
        <Link className="utilities-link" to='/utilities/timer'>Timer</Link>
        <Link className="utilities-link" to='/utilities/bigwinner'>Big Winner</Link>
      </div>
    </div>
  );
};

export default Utilities;