import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

const Timer = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [isStarted, setIsStarted] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
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

    const handleClick = () => {
        setIsRunning(!isRunning);
        if (!isStarted) {
            setIsStarted(!isStarted);
        }
    };

    return (
        <div>
            {!isStarted ? (
                <form action="">
                    <input
                        type="text"
                        placeholder="hours"
                        name="hours"
                    />
                    <input
                        type="text"
                        placeholder="minutes"
                        name="minutes"
                    />
                    <input
                        type="text"
                        placeholder="seconds"
                        name="seconds"
                    />
                    <button onClick={handleClick}>Start</button>
                </form>
            ) : (
                <div>
                    <h1>
                        {moment.duration(timeLeft, "seconds")._data
                            .hours < 10
                            ? `0${
                                  moment.duration(timeLeft, "seconds")
                                      ._data.hours
                              }`
                            : moment.duration(timeLeft, "seconds")
                                  ._data.hours}
                        :
                        {moment.duration(timeLeft, "seconds")._data
                            .minutes < 10
                            ? `0${
                                  moment.duration(timeLeft, "seconds")
                                      ._data.minutes
                              }`
                            : moment.duration(timeLeft, "seconds")
                                  ._data.minutes}
                        :
                        {moment.duration(timeLeft, "seconds")._data
                            .seconds < 10
                            ? `0${
                                  moment.duration(timeLeft, "seconds")
                                      ._data.seconds
                              }`
                            : moment.duration(timeLeft, "seconds")
                                  ._data.seconds}
                    </h1>
                    <button onClick={handleClick}>
                        {isRunning ? 'Pause' : 'Resume'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Timer;
