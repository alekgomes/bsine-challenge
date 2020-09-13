import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import { LaneContext } from "../../Context/LaneContext";
import "./style.scss";

const Lane = ({ title }) => {
  const cards = useContext(LaneContext);

  console.log(cards);

  return (
    <section className="lane">
      <h1 className="title">{title}</h1>
      <FormNewCard addCard={cards} />
    </section>
  );
};

export default Lane;
