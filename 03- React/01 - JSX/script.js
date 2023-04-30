/* 
  NOTE:

  - React is a JavaScript library, and JSX [JavaScript XML] is a JavaScript syntax extension that can be used with any JavaScript library.
  - Here the render function has props --> (what to insert, where to insert);
  - If the requirement is to use more than one HTML Elements, we wrap the whole code b/w <div>.
*/

import React from "react";
import ReactDom from "react-dom";

ReactDom.render( 
  <div>
    <h1>
      How to Greet
    </h1>
    <ul>
      <li>Namaste</li>
      <li>Hello</li>
      <li>Hola</li>
    </ul> 
  </div>
  ,document.getElementById("root1"));


/*
  - Now to create using JSX we can make the code dynamic.
  - For calling getting any input between the strings we use brackets : --> {}
  - But NOTE : we cannot write the javascript staements in it. Only expressions are allowed.
  - In JS :
      - Expression is something that is evaluated to a value. After the code ends up running it will point to a value.
      - Statements evalates and calculates the happening and then returns value. The code work out, rather than being equal or pointing.
  - Try to run this entire code in codeSandBox website for better understanding.
 */

let num = 24;

ReactDom.render(
  <div>
    <h1>HELLO</h1>  
    <p>My fav number is num.</p>
    <p>My fav number is {num}.</p>
    </div>
    ,document.getElementById("root2")
);
