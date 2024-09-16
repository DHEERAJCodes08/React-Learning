//There are Different Types of Hooks Which Prevents us From Creating Classes
// 1) useEffect
// 2) useState
// 3) useContext

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect to update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty array ensures the effect only runs once on mount

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;
