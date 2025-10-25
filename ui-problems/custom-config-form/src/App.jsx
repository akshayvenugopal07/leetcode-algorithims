import FormArea from "./components/FormArea";

import DATA from "./form-config";

import "./App.css";

function App() {
  return (
    <>
      <FormArea data={DATA.form} />
    </>
  );
}

export default App;
