import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/App.css";
import About from "./About";
import Nav from "./Nav";
import UpcomingEvents from "./UpcomingEvents";
import ContactForm from "./ContactForm";
import Slack from "./Slack";

function Home() {
  return (
    <div className='App'>
      <Nav />
      <About />
      <div className='container'>
        <UpcomingEvents />
        <Slack />
        <ContactForm />
      </div>
      <Link to='/utilities'>HI</Link>
    </div>
  );
}

export default Home;
