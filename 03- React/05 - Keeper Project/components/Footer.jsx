import React from "react";

let d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © {year}</p>
    </div>
  );
}

export default Footer;
