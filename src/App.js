import Button from "./Button";
import {useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("created");
      return byFn;
  }
  useEffect(hiFn, []);
  return (<h1>Hello</h1>);
}

function App() {
  const [showing, setShow] = useState(true);
  const onClick = () => {
    setShow(!showing);
  };
  return (
    <div>
      {showing ? <Hello /> : null};
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>

  );
}

export default App;
