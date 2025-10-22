import { useState, useEffect } from "react";

import "../../App.css";

function ProgressBar(props) {
  const { height, width, steps } = props;

  const [progress, setProgress] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  useEffect(() => {
    if (width && height && steps) {
      setStepWidth(width / steps);
    }
  }, [width, height, steps]);

  useEffect(() => {
    fillLoadingArea();
  }, [stepWidth]);

  useEffect(() => {
    if (progress < width) {
      fillLoadingArea();
    }
  }, [progress]);

  const fillLoadingArea = async () => {
    await sleep(1000);
    setProgress(progress + stepWidth);
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <div
        className="progress-area"
        style={{ background: "green", width: "100px", height: '20px', position: 'relative' }}
      >
        <span style={{ background: "red", width: `${progress}px`, height: '20px', position: 'absolute', left: 0 }}></span>
      </div>
    </>
  );
}

export default ProgressBar;
