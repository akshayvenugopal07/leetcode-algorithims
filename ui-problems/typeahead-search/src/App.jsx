import { useContext } from 'react';

import { ThemeProvider, ThemeContext } from "./contexts/theme";

import Typeahead from "./components/Typeahead";

import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="area">
        <Typeahead />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
