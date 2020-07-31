import React from 'react'

export default () => {
  return (
    <div className="home-hero-wrapper shader" id="HomeHero">   
      <div className="home-hero-container">
        <div className="home-hero-main-content">
          <div className="home-hero-main-heading">
            <div>
              Web Development
            </div>
            <div>
              meetup for coders
            </div>
            <div>
              who learn by doing
            </div>
          </div>
          <div className="join-now-btn-wrapper">
            <a
              className="join-now-btn"
              href="https://join.slack.com/t/codeassistworkspace/shared_invite/zt-frl94kyr-v7QepaQJKDG1NRh0vPdRhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </div>

          <div className="home-hero-secondary-heading">
            <div>
              EVERY WEDNESDAY
            </div>
            <div>
              6PM MST
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}