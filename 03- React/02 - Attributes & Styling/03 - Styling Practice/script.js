const React = require("react");
const ReactDOM = require("react-dom");

let greeting;
const d = new Date();
let time = d.getHours();
let colorStyle = {
  color: ""
};
if (time < 12) {
  greeting = "Good Morning";
  colorStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  colorStyle.color = "green";
} else {
  greeting = "Good Night";
  colorStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="Heading" style={colorStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
