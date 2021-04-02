import React from 'react'

import Image from '../assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg'

const HomeHero = () => {
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
              href="https://join.slack.com/t/code-experiment/shared_invite/zt-founos13-TUgJVFsUW04zQEsDh2fIlA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </div>

          <div className="home-hero-secondary-heading">
            <div>
              EVERY TUESDAY
            </div>
            <div>
              6PM MST
            </div>
          </div>
        </div>
        <div className="home-hero-image-wrapper">
          <img className="about-secondary-content" src={Image} alt="Laptop of Code" style={{ width: "100%", boxShadow: "10px 10px 20px #22223B80" }} />
        </div>
      </div>
    </div>
  )
}

export default HomeHero;