import { useState, useEffect } from "react";

function Cell(props) {
  const [displayColor, setDisplayColor] = useState("#fff");

  useEffect(() => {
    if (props.showColor) {
      setDisplayColor(props.color);
    } else {
      setDisplayColor("#fff");
    }
  }, [props.showColor, props.color]);

  const handleClick = () => {
    if (props.onCellClick) {
      props.onCellClick(props.id);
    }
  };

  return (
    <div
      className={`cell ${props.isMatched ? 'matched' : ''}`}
      style={{ backgroundColor: displayColor }}
      onClick={handleClick}
    >
    </div>
  );
}

export default Cell;
