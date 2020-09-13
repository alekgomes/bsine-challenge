import React, { useState } from "react";

import "./style.scss";

const FormNewCard = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [showButton, setShowButton] = useState(true);

  return (
    <>
      {showButton ? (
        <button onClick={() => setShowButton(false)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Mensagem"
            onChange={(e) => setBody(e.target.value)}
          />
          <button>Salvar</button>
          <button onClick={() => setShowButton(true)}>Cancelar</button>
        </form>
      )}
    </>
  );
};

export default FormNewCard;
