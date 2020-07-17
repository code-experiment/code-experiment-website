import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { Howl } from "howler";

import chiptune from "../assets/sounds/chiptune-loop.wav";

const Timer = () => {
    const alarm = new Howl({
        src: [chiptune],
    });

    const [isStarted, setIsStarted] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5000);

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        setTimeLeft(
            parseInt(data.hours) * 3600 +
                parseInt(data.minutes) * 60 +
                parseInt(data.seconds)
        );
        setIsStarted(!isStarted);
        setIsRunning(!isRunning);
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
            const interval = setInterval(
                () => setTimeLeft(timeLeft - 1),
                1000
            );
            return () => clearInterval(interval);
        }
        if (timeLeft === 0 && isStarted) {
            alarm.play();
        }
    });

    return (
        <div>
            <h1>Very Cool Timer</h1>
            {!isStarted ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="hours"
                        defaultValue="00"
                        ref={register}
                    />
                    <input
                        name="minutes"
                        defaultValue="00"
                        ref={register}
                    />
                    <input
                        name="seconds"
                        defaultValue="00"
                        ref={register}
                    />
                    <button type="submit">Start</button>
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
                        {timeLeft === 0
                            ? "Reset"
                            : isRunning
                            ? "Pause"
                            : "Resume"}
                    </button>
                    {isStarted && timeLeft > 0 ? (
                        <button onClick={handleCancelClick}>
                            Cancel
                        </button>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default Timer;
