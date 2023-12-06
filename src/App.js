import English from "./pages/English";
import Turkish from "./pages/Turkish";
import { useState } from "react";

function App() {
  const [turkish, setTurkish] = useState(false);
  const [english, setEnglish] = useState(false);

  const [languange, setLanguange] = useState(false);

  const turkishHandler = (e) => {
    e.preventDefault();
    setTurkish(true);
    setEnglish(false);
  };

  const englishHandler = (e) => {
    e.preventDefault();
    setTurkish(false);
    setEnglish(true);
  };
  return turkish ? (
    <Turkish onClick={englishHandler} />
  ) : (
    <English onClick={turkishHandler} />
  );
}

export default App;
