import React from "react";

import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div className='App'>
      {/* <div className='container'> */}
        <About />
        <UpcomingEvents />
        <ContactForm />
      {/* </div> */}
    </div>
  );
}

export default Home;
