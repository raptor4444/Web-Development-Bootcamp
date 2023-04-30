import React from "react";
import Login from "./login";

let isLoggedin = false;

// function renderConditionally() {
//   if (isLoggedin) {
//     return <h1>Hello User</h1>;
//   } else {
//     return <Login />;
//   }
// }

//above can also be written as following:

function App() {
  return (
    <div className="container">
      {isLoggedin ? <h1>Hello User</h1> : <Login />}
    </div>
  );
}

export default App;
