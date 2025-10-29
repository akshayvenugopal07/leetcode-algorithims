import { useState, useEffect } from "react";

import Bubble from "./Bubble";

import "../App.css";

interface Bubble {
  id: number;
  xPos: number;
  yPos: number;
  background: string;
}

function Board() {
  const [isLoading, setIsLoading] = useState(true);
  const [bubbles, setBubbleItem] = useState<Bubble[]>([]);

  useEffect(() => {
    setIsLoading(false);
    return () => {
      console.log("Cleanup Here");
    };
  }, []);

  const addBubbleToBoard = (event: any) => {
    setBubbleItem((prevBubbles) => [
      ...prevBubbles,
      {
        id: new Date().getTime(),
        xPos: event.clientX,
        yPos: event.clientY,
        background: generateRandomColor(),
      },
    ]);
  };

  const generateRandomColor = () => {
    // Generate a random number between 0 and 16777215 (0xFFFFFF)
    const randomNumber = Math.floor(Math.random() * 16777215);

    // Convert the number to a hexadecimal string
    let hexColor = randomNumber.toString(16);

    // Pad with leading zeros if necessary to ensure 6 characters
    hexColor = hexColor.padStart(6, "0");

    // Prepend '#' and convert to uppercase for standard hex color format
    return `#${hexColor.toUpperCase()}`;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="board-container" onClick={(e) => addBubbleToBoard(e)}>
      {bubbles.map((bubble) => (
        <Bubble {...bubble} />
      ))}
    </div>
  );
}

export default Board;
