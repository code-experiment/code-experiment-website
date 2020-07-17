import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

const Timer = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [timeLeft, setTimeLeft] = useState(5000);

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => console.log(data);

    const handleClick = () => {
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
    });

    return (
        <div>
            {!isStarted ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="hours"
                        defaultValue={hours}
                        ref={register}
                    />
                    <input
                        name="minutes"
                        defaultValue={minutes}
                        ref={register}
                    />
                    <input
                        name="seconds"
                        defaultValue={seconds}
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
                        {isRunning ? "Pause" : "Resume"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Timer;
