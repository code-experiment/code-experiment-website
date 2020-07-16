import React, { useState } from "react";

const Timer = () => {
    const [hours, setHours] = useState(5);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(5);

    const handleStartClick = () => {
        console.log("click");
    };

    return (
        <div>
            <h1>
                {hours < 10 ? `0${hours}` : { hours }}:
                {minutes < 10 ? `0${minutes}` : { minutes }}:
                {seconds < 10 ? `0${seconds}` : { seconds }}
            </h1>

            <button onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default Timer;
