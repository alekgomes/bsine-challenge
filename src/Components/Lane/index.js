import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import { LaneContext } from "../../Context/LaneContext";
import "./style.scss";

const Lane = ({ title, id }) => {
  const { state } = useContext(LaneContext);

  const cardInformation = state[id].infos;

  return (
    <section className="lane">
      <h1 className="title">{title}</h1>
      <FormNewCard id={id} />
      {cardInformation.map((info) => (
        <Card key={info.title} laneId={id} title={info.title} body={info.body} />
      ))}
    </section>
  );
};

export default Lane;
