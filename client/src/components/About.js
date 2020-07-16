import React from 'react'

export default () => {
  return (
    <div id="about">
      <div className="about-content container">
        <div className="about-main-content">
          <div className="about-main-content-heading">
            Open Web Development meetup for coders who learn by doing.
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
        </div>
        <div className="about-secondary-content">
          <div className="about-secondary-content-item">
            Welcome to Code Experiment. Our goal is to help all those at a beginner and intermediate level get a better grasp of web development by hands on experimentation with other coders. While most meetups have you follow along or try to code on your own after the fact, we believe that having a mentor accessible WHILE you’re coding can make all the difference.
          </div>
          <div className="about-secondary-content-item">
            Dan Floyd, a current instructor and student mentor at Bottega specializing in Python, NodeJs and React, will lead each week’s experiment. You will be given challenges to complete either by yourself or by pair-programming with others in the meetup. Challenges will be sized for completion within the timeframe of each meetup, and there will be a slack channel for all meetup members to discuss and compare during the week.
          </div>
          <div className="about-secondary-content-item">
            Every Wednesday at 6pm MT
          </div>
        </div>
      </div>
  </div>
  )
}