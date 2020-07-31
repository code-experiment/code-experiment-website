import React from 'react'

export default () => {
  return (
    <div id="About" className="about-wrapper">
      <div style={{ width: "99vw", backgroundColor: "#22223B", height: "calc(100vh - 75px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "60%", height: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "3rem", color: "#F88E00", textAlign: "center" }}>
            CODE EXPERIMENT
          </div>

          <div style={{ height: "60%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", color: "#FFFFFF", textAlign: "center", fontSize: "1.25rem", lineHeight: "1.6em" }}>
            <div>
              Welcome to Code Experiment. Our goal is to help all those at a beginner and intermediate level get a better grasp of web development by hands on experimentation with other coders. While most meetups have you follow along or try to code on your own after the fact, we believe that having a mentor accessible WHILE you’re coding can make all the difference.
            </div>
            <div>
              Dan Floyd, a current instructor and student mentor at Bottega specializing in Python, NodeJs and React, will lead each week’s experiment. You will be given challenges to complete either by yourself or by pair-programming with others in the meetup. Challenges will be sized for completion within the timeframe of each meetup, and there will be a slack channel for all meetup members to discuss and compare during the week.
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}