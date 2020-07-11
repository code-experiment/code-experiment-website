import React from 'react';
import '../styles/main.css';
import About from './About';
import Nav from './Nav';
import UpcomingEvents from './UpcomingEvents';
import SlackImage from '../images/slack-image.png'
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <About />
        <UpcomingEvents />
        <div className="slack-background-image" style={{ background: `url(${SlackImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a
            href="https://join.slack.com/t/codeassistworkspace/shared_invite/zt-frl94kyr-v7QepaQJKDG1NRh0vPdRhQ"
            target="_blank"
            id="slack"
            rel="noopener noreferrer"
            style={{ width: 100, height: 40, backgroundColor: "#22223b", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none" }}
          >
            <div style={{ color: "#F88E00"}}>
              Join Slack
            </div>
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
