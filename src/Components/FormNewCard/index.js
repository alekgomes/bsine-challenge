import React, { useState } from "react";
import Card from "../Card";

import "./style.scss";

const FormNewCard = ({ addCard, setIsEditing }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard[1]([
      ...addCard[0],
      <Card title={title} body={body} />,
    ]);
    setTitle("");
    setBody("");
    setIsEditing(false);
  };

  return (
    <form>
      <p>
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          type="text"
          placeholder="Mensagem"
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <button onClick={(e) => handleSubmit(e)}>Salvar</button>
    </form>
  );
};

export default FormNewCard;
