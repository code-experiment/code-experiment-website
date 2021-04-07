import React from "react";

const About = () => {
  return (
    <div id="About" className="about-wrapper">
      <div className="about-container">
        <div className="about-header">CODE EXPERIMENT</div>

        <div className="about-text-wrapper">
          <div className="about-text">
            Welcome to Code Experiment. Our goal is to help all those at a
            beginner and intermediate level get a better grasp of web
            development by hands on experimentation with other coders. While
            most meetups have you follow along or try to code on your own after
            the fact, we believe that having a mentor accessible WHILE you’re
            coding can make all the difference.
          </div>
          <div className="about-text">
            Dan Floyd, a current instructor and student mentor at Bottega
            specializing in Python, NodeJs and React, will lead each week’s
            experiment. You will be given challenges to complete either by
            yourself or by pair-programming with others in the meetup.
            Challenges will be sized for completion within the timeframe of each
            meetup, and there will be a slack channel for all meetup members to
            discuss and compare during the week.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
