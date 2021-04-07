import React from "react";
import { Link } from "react-router-dom";
import tbot from "../assets/images/tbot.png";

const NoMatch = () => {
  return (
    <div className="error-wrapper">
      <div className="error-heading">
        <h1>
          Yikes... Who knows when that page will be available, would you like to{" "}
          <span>
            <Link to="/" className="error-link">
              Return to Home
            </Link>
            ?
          </span>
        </h1>
      </div>
      <div className="error-image-wrapper">
        <img className="error-image" src={tbot} alt="Error tbot" />
      </div>
    </div>
  );
};

export default NoMatch;
