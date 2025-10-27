function Bubble({ id, xPos, yPos, background }) {
  return (
    <div
      key={id}
      className="circle"
      style={{ backgroundColor: background, left: `${xPos - 5}px`, top: `${yPos - 5}px` }}
    />
  );
}

export default Bubble;
