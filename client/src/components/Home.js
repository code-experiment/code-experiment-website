import React from "react";

import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import ContactForm from "./ContactForm";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <div className="App">
      <HomeHero />
      <About />
      <UpcomingEvents />
      <ContactForm />
    </div>
  );
};

export default Home;
