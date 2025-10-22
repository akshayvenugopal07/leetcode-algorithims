import { useState, useEffect } from "react";

import ProgressBar from "./components/Progressbar/ProgressBar";

import "./App.css";

function App() {
  const [myArray, setMyArray] = useState([]);

  const handleClick = () => {
    const newValue = {
      id: generateId()
    };
    setMyArray(prevArray => [...prevArray, newValue]); 
  };

  const generateId = () => {
  // Combine timestamp and random number
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}


  return (
    <>
      <h1>Progress Bar</h1>
      <button type="button" onClick={handleClick}>
        Add Loader
      </button>
      {myArray.map((item) => (
        <div key={item.id}>
          <ProgressBar height={20} width={100} steps={5} />
        </div>
      ))}
    </>
  );
}

export default App;
