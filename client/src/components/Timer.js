import React, { useState, useEffect } from "react";

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
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
                {timeLeft}
            </h1>

            <button onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default Timer;
