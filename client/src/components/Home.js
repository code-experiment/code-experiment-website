import React from "react";
import { Link } from "react-router-dom";

import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import ContactHookForm from "./ContactHookForm";
import Slack from "./Slack";

function Home() {
  return (
    <div className='App'>
      <About />
      <div className='container'>
        <UpcomingEvents />
        <Slack />
        <ContactHookForm />
      </div>
      <Link to='/utilities'>HI</Link>
    </div>
  );
}

export default Home;
