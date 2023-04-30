const React = require("react");
const ReactDOM = require("react-dom");

let name = "Nishant Giri";
let year = new Date();
let currentyear = year.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentyear}</p>
    <div>
      <img
        className="img1"
        alt="paneer" src="https://theyummydelights.com/wp-content/uploads/2018/07/dhaba-style-paneer-masala-recipe.jpg"
      />
      <img
        className="img1"
        alt="naan" src="https://static.toiimg.com/thumb/53338316.cms?imgsize=223266&width=800&height=800"
      />
      <img
        className="img1"
        alt="Dal-Makhani" src="https://recipesofhome.com/wp-content/uploads/2020/12/dal-makhani-recipe-720x540.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
