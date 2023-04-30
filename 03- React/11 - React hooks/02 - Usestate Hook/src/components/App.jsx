import React, { useState } from "react";

//UseState  is a react hook:
function App() {
  let [count, setState] = useState(0);

  // Increase the value:
  function increase() {
    setState(count + 1);
  }

  // Decrease the value:
  function decrease() {
    setState(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
