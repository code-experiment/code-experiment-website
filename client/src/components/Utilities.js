import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="utilities-wrapper">
      <h1>Utilities Page</h1>
      <Link to='/utilities/randomizer'>Randomizer</Link>
      <Link to='/utilities/timer'>Timer</Link>
    </div>
  );
};
