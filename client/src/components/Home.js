import React from "react";
import { Link } from "react-router-dom";

import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import ContactForm from "./ContactForm";
import Slack from "./Slack";
import Modal from "../helpers/Modal";

function Home() {
  return (
    <div className='App'>
      <Modal />
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
