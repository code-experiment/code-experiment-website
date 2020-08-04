import React from "react";

import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import ContactForm from "./ContactForm";
import HomeHero from "./HomeHero";

function Home() {
  return (
    <div className='App'>
      {/* <div className='container'> */}
        <HomeHero />
        <About />
        <UpcomingEvents />
        <ContactForm />
      {/* </div> */}
    </div>
  );
}

export default Home;
