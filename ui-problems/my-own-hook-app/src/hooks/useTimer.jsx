import { useState, useEffect, useRef, useCallback } from "react";

function useTimer(time) {
  const [seconds, setSeconds] = useState(time);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  const stop = useCallback(() => {
    setIsRunning(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
  }, []);

  const start = () => {
    if (intervalId.current !== null) return; // Prevent multiple intervals

    intervalId.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    setIsRunning(true);
  };

  useEffect(() => {
    if (seconds <= 0) {
      stop();
    }
  }, [seconds, stop]);

  useEffect(() => {
    return () => {
      // Cleanup interval on component unmount
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  return {
    isRunning,
    start,
    stop,
    seconds,
  };
}

export default useTimer;
