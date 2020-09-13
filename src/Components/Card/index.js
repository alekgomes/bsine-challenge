import React, { useContext } from "react";
import "./style.scss";
import { LaneContext } from "../../Context/LaneContext";

const Card = ({ title, body, laneId }) => {
  const { removeInfos } = useContext(LaneContext);

  return (
    <div className="card">
      <h1>{title}</h1>
      <p className="body">{body}</p>
      <button onClick={() => removeInfos(laneId, title)} className="remove">
        X
      </button>
    </div>
  );
};

export default Card;
