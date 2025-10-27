import Board from "./components/Board";

import { ThemeProvider } from "./context/theme";

import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <Board />
      </ThemeProvider>
    </>
  );
}

export default App;
