import { useState, useEffect } from "react";

import { getRandomColors } from "../../config";

import Cell from "../Cell/Cell";

function GridGame(props) {
  const [count, setCellCount] = useState(0);
  const [cells, setCells] = useState([]);
  const [prev, setPrev] = useState(null);
  const [rounds, setRounds] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setCellCount(props.gameCellCount);
  }, [props.gameCellCount]);

  useEffect(() => {
    const initGame = () => {
      if (count <= 0) {
        return;
      }
      if (count % 4 !== 0) {
        return;
      }
      let tempCells = [];
      let colors = getRandomColors(count / 2);

      // Create pairs of each color
      let colorPairs = [];
      colors.forEach((color) => {
        colorPairs.push(color, color);
      });

      // Shuffle the color pairs randomly
      for (let i = colorPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colorPairs[i], colorPairs[j]] = [colorPairs[j], colorPairs[i]];
      }

      // Assign shuffled colors to cells
      for (let i = 0; i < count; i++) {
        tempCells.push({
          color: colorPairs[i],
          id: i,
          showColor: false,
          isMatched: false,
          isTemporarilyShown: false,
        });
      }
      setCells(tempCells);
      setRounds(0);
      setGameCompleted(false);
      setPrev(null);
      setIsProcessing(false);
    };

    initGame();
  }, [count]);

  const initializeGame = () => {
    if (count <= 0) {
      return;
    }
    if (count % 4 !== 0) {
      return;
    }
    let tempCells = [];
    let colors = getRandomColors(count / 2);

    // Create pairs of each color
    let colorPairs = [];
    colors.forEach((color) => {
      colorPairs.push(color, color);
    });

    // Shuffle the color pairs randomly
    for (let i = colorPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colorPairs[i], colorPairs[j]] = [colorPairs[j], colorPairs[i]];
    }

    // Assign shuffled colors to cells
    for (let i = 0; i < count; i++) {
      tempCells.push({
        color: colorPairs[i],
        id: i,
        showColor: false,
        isMatched: false,
        isTemporarilyShown: false,
      });
    }
    setCells(tempCells);
    setRounds(0);
    setGameCompleted(false);
    setPrev(null);
    setIsProcessing(false);
  };

  const handleCellClick = (cellId) => {
    // Prevent clicks during processing or if game is completed
    if (isProcessing || gameCompleted) {
      return;
    }

    const clickedCell = cells.find(cell => cell.id === cellId);
    
    // Prevent clicking on already matched cells or already shown cells
    if (clickedCell.isMatched || clickedCell.isTemporarilyShown) {
      return;
    }

    // Show the clicked cell temporarily
    const updatedCells = cells.map(cell => 
      cell.id === cellId 
        ? { ...cell, isTemporarilyShown: true }
        : cell
    );
    setCells(updatedCells);

    if (prev === null) {
      // First cell clicked
      setPrev(clickedCell);
    } else {
      // Second cell clicked
      if (prev.id === cellId) {
        // Same cell clicked twice, ignore
        return;
      }

      setIsProcessing(true);
      setRounds(prevRounds => prevRounds + 1);

      if (prev.color === clickedCell.color) {
        // Colors match - mark both as matched
        setTimeout(() => {
          const matchedCells = cells.map(cell => {
            if (cell.id === prev.id || cell.id === cellId) {
              return { ...cell, isMatched: true, showColor: true, isTemporarilyShown: false };
            }
            return cell;
          });
          setCells(matchedCells);
          setPrev(null);
          setIsProcessing(false);

          // Check if game is completed
          const allMatched = matchedCells.every(cell => cell.isMatched);
          if (allMatched) {
            setGameCompleted(true);
          }
        }, 100);
      } else {
        // Colors don't match - hide both after 400ms
        setTimeout(() => {
          const resetCells = cells.map(cell => {
            if (cell.id === prev.id || cell.id === cellId) {
              return { ...cell, isTemporarilyShown: false };
            }
            return cell;
          });
          setCells(resetCells);
          setPrev(null);
          setIsProcessing(false);
        }, 400);
      }
    }
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <div className="game-container">
      <div className="game-info">
        <p>Rounds: {rounds}</p>
        {gameCompleted && (
          <div className="game-completed">
            <h2>🎉 Congratulations!</h2>
            <p>You completed the game in {rounds} rounds!</p>
            <button onClick={resetGame} className="reset-button">
              Reset Game
            </button>
          </div>
        )}
      </div>
      <div className="grid">
        {cells.map((item) => (
          <Cell
            key={item.id}
            id={item.id}
            color={item.color}
            showColor={item.showColor || item.isTemporarilyShown}
            isMatched={item.isMatched}
            onCellClick={handleCellClick}
          />
        ))}
      </div>
    </div>
  );
}

export default GridGame;
