import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { Howl } from "howler";

// import "98.css";

import upButton from "../../assets/images/button-up.svg";
import downButton from "../../assets/images/button-down.svg";
import chiptune from "../../assets/sounds/chiptune-loop.wav";

const Timer = () => {
  const alarm = new Howl({
    src: [chiptune],
  });

  const [isStarted, setIsStarted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const timeInSec =
      parseInt(data.hours) * 3600 +
      parseInt(data.minutes) * 60 +
      parseInt(data.seconds);

    setTimeLeft(timeInSec);
    setIsStarted(!isStarted);
    setIsRunning(true);
  };

  const handleClick = () => {
    if (timeLeft === 0) {
      setIsStarted(!isStarted);
      alarm.stop();
    }
    setIsRunning(!isRunning);
  };

  const handleCancelClick = () => {
    setIsStarted(!isStarted);
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(interval);
    }
    if (timeLeft === 0 && isStarted) {
      alarm.play();
    }
  });

  const startButton = () => {
    if (hours + minutes + seconds > 0) {
      return (
        <button className='start-button' type='submit'>
          Start
        </button>
      );
    } else {
      return <button disabled>Start</button>;
    }
  };

  const incrementField = (type) => {
    if (type === "hours") {
      setHours(parseInt(hours) + 1);
    } else if (type === "minutes") {
      setMinutes(parseInt(minutes) + 1);
    } else if (type === "seconds") {
      setSeconds(parseInt(seconds) + 1);
    }
  };

  const decrementField = (type) => {
    if (type === "hours" && hours > 0) {
      setHours(parseInt(hours) - 1);
    } else if (type === "minutes" && minutes > 0) {
      setMinutes(parseInt(minutes) - 1);
    } else if (type === "seconds" && seconds > 0) {
      setSeconds(parseInt(seconds) - 1);
    }
  };

  const timer = moment.duration(timeLeft, "seconds")._data;

  return (
    <div className='timer-container'>
      <div className='timer-wrapper'>
        <div className='window'>
          <div className='title-bar'>
            <div className='title-bar-text'>Very Cool Timer</div>
            <div className='title-bar-controls'>
              <button
                aria-label='Help'
                onClick={() =>
                  alert(
                    "It's just a timer!\nInput a time using your keyboard or the arrow buttons.\nHit the start button.\nWhen time is up, you will hear an alarm."
                  )
                }
              />
              <button
                aria-label='Close'
                onClick={() =>
                  alert(
                    "If you close this timer, you'll have nothing left to look at.\nI can't let you do that."
                  )
                }
              />
            </div>
          </div>
          {!isStarted ? (
            <div className='form-wrapper window-body'>
              <p>Please enter a time.</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='field-row'>
                  <div className='hours time-input '>
                    <input
                      name='hours'
                      value={hours}
                      ref={register}
                      onChange={(event) => setHours(event.target.value)}
                    />
                    <img
                      src={upButton}
                      alt='up arrow'
                      onClick={() => incrementField("hours")}
                    />
                    <img
                      src={downButton}
                      alt='down arrow'
                      onClick={() => decrementField("hours")}
                    />
                  </div>
                  <div className='minutes time-input'>
                    <input
                      name='minutes'
                      value={minutes}
                      ref={register}
                      onChange={(event) => setMinutes(event.target.value)}
                    />
                    <img
                      src={upButton}
                      alt='up arrow'
                      onClick={() => incrementField("minutes")}
                    />
                    <img
                      src={downButton}
                      alt='down arrow'
                      onClick={() => decrementField("minutes")}
                    />
                  </div>
                  <div className='seconds time-input'>
                    <input
                      name='seconds'
                      value={seconds}
                      ref={register}
                      onChange={(event) => setSeconds(event.target.value)}
                    />
                    <img
                      src={upButton}
                      alt='up arrow'
                      onClick={() => incrementField("seconds")}
                    />
                    <img
                      src={downButton}
                      alt='down arrow'
                      onClick={() => decrementField("seconds")}
                    />
                  </div>
                </div>
                <div className='field-row window-button-wrapper'>
                  {startButton()}
                </div>
              </form>
            </div>
          ) : (
            <div className='countdown-wrapper window-body'>
              <div className='countdown-display'>
                <p>
                  {timer.hours < 10 ? `0${timer.hours}` : timer.hours}:
                  {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
                  {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                </p>
              </div>
              <div className='window-button-wrapper'>
                <button onClick={handleClick}>
                  {timeLeft === 0 ? "Reset" : isRunning ? "Pause" : "Resume"}
                </button>
                {isStarted && timeLeft > 0 ? (
                  <button onClick={handleCancelClick}>Cancel</button>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
