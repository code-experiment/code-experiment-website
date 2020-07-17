import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(125);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            console.log(moment.duration(timeLeft, "seconds"));
            const interval = setInterval(
                () => setTimeLeft(timeLeft - 1),
                1000
            );
            return () => clearInterval(interval);
        }
    });

    const handleStartClick = () => {
        setIsRunning(true);
    };

    return (
        <div>
            <h1>
                {moment.duration(timeLeft, "seconds")._data.hours < 10
                    ? `0${
                          moment.duration(timeLeft, "seconds")._data
                              .hours
                      }`
                    : moment.duration(timeLeft, "seconds")._data
                          .hours}
                :{moment.duration(timeLeft, "seconds")._data.minutes < 10
                    ? `0${
                          moment.duration(timeLeft, "seconds")._data
                              .minutes
                      }`
                    : moment.duration(timeLeft, "seconds")._data
                          .minutes}:
                {moment.duration(timeLeft, "seconds")._data.seconds < 10
                    ? `0${
                          moment.duration(timeLeft, "seconds")._data
                              .seconds
                      }`
                    : moment.duration(timeLeft, "seconds")._data
                          .seconds}
            </h1>

            <button onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default Timer;
