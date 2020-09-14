import React, { useContext } from "react";
import FormNewCard from "../FormNewCard";
import Card from "../Card";
import { LaneContext } from "../../Context/LaneContext";
import {ItemTypes} from '../../Constants'
import { useDrop } from "react-dnd";
import "./style.scss";

const Lane = ({ title, id }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => console.log(this.title),
    
  });

  const { state } = useContext(LaneContext);

  const cardInformation = state[id].infos;

  return (
    <section className="lane" ref={drop}>
      <h1 className="title">{title}</h1>
      <FormNewCard id={id} />
      {cardInformation.map((info) => (
        <Card
          key={info.title}
          laneId={id}
          title={info.title}
          body={info.body}
        />
      ))}
    </section>
  );
};

export default Lane;
