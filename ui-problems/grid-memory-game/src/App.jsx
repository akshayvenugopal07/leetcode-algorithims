import GridGame from "./components/GridGame/GridGame";

import "./App.css";

function App() {
  return (
    <>
      <h1>Grid Memory Game</h1>
      <GridGame gameCellCount={16} />
    </>
  );
}

export default App;
