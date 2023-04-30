import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setHeading] = useState(name);

  function handlechange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handlechange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
