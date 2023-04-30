import React, { useState } from "react";

function App() {
  // setInterval(updateTime, 1000); //use this to make the time update automatically every second

  //Getting current time:
  const time1 = new Date().toLocaleTimeString("it-IT");
  let [currentTime, time2] = useState(time1);

  //Getting Updated time:
  function updateTime() {
    let newTime = new Date().toLocaleTimeString("it-IT");
    time2(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
