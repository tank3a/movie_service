import Button from "./Button";
import {useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run all the time");

  const iRun = () => {
    console.log("I run only once");
  };
  useEffect(iRun);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>UP</button>
    </div>

  );
}

export default App;
