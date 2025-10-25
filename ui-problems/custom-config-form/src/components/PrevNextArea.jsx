import "../App.css";

function PrevNextArea({previous, next}) {
  return (
    <>
      <p>Step</p>
      <div className="prev-next-buttons">
        {previous.enabled && <button onClick={previous.onClick}>{previous.label}</button>}
        {next.enabled && <button onClick={next.onClick}>{next.label}</button>}
      </div>
    </>
  );
}

export default PrevNextArea;
