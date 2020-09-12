import React, { useState } from "react";
import ReactDOM from "react-dom";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Lane from "./Components/Lane";
import Main from "./Layout/Main";
import Card from "./Components/Card";
import "./style.scss";

const App = () => {
  const [cardsPlanejada, setCardsPlanejada] = useState([<Card title="Card 01" body={"planejada"} />])
  const [cardsExecutando, setCardsExecutando] = useState([<Card title="Card 01" body={"Executando"} />])
  const [cardsImpasse, setCardsImpasse] = useState([<Card title="Card 01" body={"Impasse"} />])
  const [cardsFinalizada, setCardsFinalizada] = useState([<Card title="Card 01" body={"Finalizada"} />])

  return (
    <>
      <Header />
      <Aside />
      <Main>
        <Lane title="Planejada" cards={[cardsPlanejada, setCardsPlanejada]} />
        <Lane title="Executando" cards={[cardsExecutando, setCardsExecutando]} />
        <Lane title="Impasse" cards={[cardsImpasse, setCardsImpasse]} />
        <Lane title="Finalizada" cards={[cardsFinalizada, setCardsFinalizada]} />
      </Main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
