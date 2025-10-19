import { useState, useEffect } from "react";

import { getRandomColors } from "../../config";

import Cell from "../Cell/Cell";

function GridGame(props) {
  const [count, setCellCount] = useState(0);
  const [cells, setCells] = useState([]);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    setCellCount(props.gameCellCount);
  }, [props.gameCellCount]);

  useEffect(() => {
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
        id: i + 1,
        showColor: false,
      });
    }
    setCells(tempCells);
  }, [count]);

  function setColor(data) {
    console.log("Selected color:", data);
    if (prev === null) {
      setPrev(data);
      return;
    }
    if (prev.color === data.color && prev.id !== data.id) {
      prev.showColor = true;
      data.showColor = true;
      setPrev(null);
      setCells([...cells]);
      return;
    }
  }

  return (
    <>
      <div className="grid">
        {cells.map((item, index) => (
          <Cell
            key={index}
            color={item.color}
            showColor={item.showColor}
            onSelectColor={setColor}
          />
        ))}
      </div>
    </>
  );
}

export default GridGame;
