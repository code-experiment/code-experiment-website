import React from 'react';

import '../styles/main.css';
import '../styles/App.css'
import About from './About';
import Nav from './Nav';
import UpcomingEvents from './UpcomingEvents';
import ContactForm from './ContactForm';
import Slack from './Slack';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <div className="container">
        <UpcomingEvents />
        <Slack />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;