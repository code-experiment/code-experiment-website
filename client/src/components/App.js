import React from 'react';

import slackLogo from '../images/Slack_Mark_Web.png'
import '../styles/main.css';
import '../styles/App.css'
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
        <div className="slack-wrapper" id="slack">
          <div className="slack-logo-wrapper">
            <a
              href="https://join.slack.com/t/codeassistworkspace/shared_invite/zt-frl94kyr-v7QepaQJKDG1NRh0vPdRhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="slack-logo" src={slackLogo} alt="slack logo" />
            </a>
          </div>
          <a
            className="slack-link-text"
            href="https://join.slack.com/t/codeassistworkspace/shared_invite/zt-frl94kyr-v7QepaQJKDG1NRh0vPdRhQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on Slack
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;