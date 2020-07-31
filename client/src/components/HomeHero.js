import React from 'react'

import Image from '../assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg'

export default () => {
  return (
    <div className="homehero shader">   
      <div className="about-content container">
        <div className="about-main-content">
          <div className="about-main-content-heading">
            Web Development meetup for coders who learn by doing.
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

          <div style={{ width: "100%", color: "#22223B", fontSize: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div>
              EVERY WEDNESDAY
            </div>
            <div>
              6PM MST
            </div>
          </div>
        </div>
        <div className="tester">
          <img className="about-secondary-content" src={Image} alt="Laptop of Code" style={{ width: "100%", boxShadow: "10px 10px 20px #22223B80" }} />
        </div>
      </div>
    </div>
  )
}