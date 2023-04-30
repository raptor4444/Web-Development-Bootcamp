const React = require("react");
const ReactDOM = require("react-dom");

let name = "Nishant Giri";
let year = new Date();
let currentyear = year.getFullYear();

const StyleSheet = {
  color: "red",
  fontSize: 23,
  border: "1px solid black"
}

ReactDOM.render(
  <div>
    <h1 style={{color: "red"}}>Hello World!!</h1>
    <h1 style={StyleSheet}>Namaste Everyone</h1>
  </div>,
  document.getElementById("root")
);
