import React from 'react';
import '../styles/main.css';
import About from './About';
import Nav from './Nav';
import UpcomingEvents from './UpcomingEvents';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <About />
        <UpcomingEvents />
        <a
          href="https://join.slack.com/t/codeassistworkspace/shared_invite/zt-frl94kyr-v7QepaQJKDG1NRh0vPdRhQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Slack
        </a>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
