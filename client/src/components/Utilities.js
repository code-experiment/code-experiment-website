import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>Utilities Page</h1>
      <Link to='/'>Home</Link>
    </div>
  );
};
