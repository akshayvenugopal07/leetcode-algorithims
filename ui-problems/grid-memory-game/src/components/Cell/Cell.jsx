import { useState, useEffect } from "react";

function Cell(props) {
  const [color, setColor] = useState("");
  const [displayColor, setDisplayColor] = useState("");

  useEffect(() => {
    setColor(props.color);
    setDisplayColor("#fff");
  }, [props.color]);

  useEffect(() => {
    setColor(props.color);
  }, [props.showColor]);

  return (
    <div
      className="cell"
      style={{ backgroundColor: displayColor }}
      onClick={() => {
        setDisplayColor(color);
        props.onSelectColor(props);
      }}
    >
      <p>Cell</p>
    </div>
  );
}

export default Cell;
