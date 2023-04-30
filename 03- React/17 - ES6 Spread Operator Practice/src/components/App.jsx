import React, { useState } from "react";

function App() {
  let [inputText, setitems] = useState("");
  let [items, newitems] = useState([]);

  function Handlechange(event) {
    const newValue = event.target.value;
    setitems(newValue);
  }

  function HandleClick() {
    newitems((prevItems) => {
      return [...prevItems, inputText];
    });
    setitems("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={Handlechange} type="text" value={inputText} />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
