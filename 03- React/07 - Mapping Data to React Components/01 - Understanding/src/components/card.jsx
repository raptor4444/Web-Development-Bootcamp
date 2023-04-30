import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <p class="info">{props.tel}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
