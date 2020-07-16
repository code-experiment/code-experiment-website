import React from 'react';

import '../styles/main.css';
import '../styles/App.css'
import About from './About';
import Nav from './Nav';
import UpcomingEvents from './UpcomingEvents';
import ContactForm from './ContactForm';
import Slack from './Slack';
import Randomizer from './Randomizer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <About />
        <UpcomingEvents />
        <Slack />
        <ContactForm />
        <Randomizer />
      </div>
    </div>
  );
}

export default App;