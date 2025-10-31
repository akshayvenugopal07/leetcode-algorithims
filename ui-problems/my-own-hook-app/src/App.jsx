import { useEffect } from "react";

import useTimer from "./hooks/useTimer";

import "./App.css";

function App() {
  const TOTAL_TIME = 50;
  const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);

  useEffect(() => {
    // start();
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer-title">
        Timer: {seconds} {isRunning}
      </h1>
      <div className="action-container">
        <button className="custom-button" onClick={start} type="button">
          Start
        </button>
        <button className="custom-button" onClick={stop} type="button">
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
