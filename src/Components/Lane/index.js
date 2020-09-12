import React, { useState } from "react";
import FormNewCard from '../FormNewCard'
import "./style.scss";

const Lane = ({ title, cards }) => {
  const [isEditing, setIsEditing] = useState(false);  
  return (
    <section className="lane">
      <h1 className="title">{title}</h1>
      {isEditing ? (
        <FormNewCard addCard={cards} setIsEditing={setIsEditing} />
      ) : (
        <button onClick={() => setIsEditing(true)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      )}
    {cards[0]}
    </section>
  );
};

export default Lane;
