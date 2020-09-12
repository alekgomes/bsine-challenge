import React from "react";
import "./style.scss";

const Card = ({title, body}) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <span>Data</span>
      <p className="body">{body}</p>
      <button className="remove">remover</button>
    </div>
  );
};

export default Card;
