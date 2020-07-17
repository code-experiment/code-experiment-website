import React from "react";
import { Link } from "react-router-dom";
import tbot from "../assets/images/tbot.png";

export default () => {
  return (
    <div class='error_wrapper'>
      <div class='error_heading'>
        <h2>
          Yikes... Who knows when that page will be available, would you like to{" "}
          <Link to='/'>Return to Home</Link>?
        </h2>
      </div>
      <img src={tbot} alt='' />
    </div>
  );
};
