import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);

    const handleRestart = () => {
        setTime(0);
        setRunning(false);
    };

    const handleStart = () => {
        setRunning((prev) => !prev);
    };

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]); 

    return (
        <div>
            <h1>Stopwatch App</h1>
            <h2>Timer: {time}s</h2>
            <button onClick={handleStart}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleRestart}>Reset</button>
        </div>
    );
};

export default Stopwatch;
