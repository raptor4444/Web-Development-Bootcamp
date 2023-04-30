import React from "react";
import ReactDOM from "react-dom";
import Add, { Multiply, Subtract, Divide } from "./calculator.js";

ReactDOM.render(
  <div>
    <ul>
      <li>{Add(1, 2)}</li>
      <li>{Multiply(2, 3)}</li>
      <li>{Subtract(7, 2)}</li>
      <li>{Divide(5, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
