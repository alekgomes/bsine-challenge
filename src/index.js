import React from "react";
import ReactDOM from "react-dom";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Lane from "./Components/Lane";
import Main from "./Layout/Main";
import { LaneProvider } from "./Context/LaneContext";
import "./style.scss";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <LaneProvider>
        <Main>
          <Lane title="Planejada" />
          <Lane title="Executando" />
          <Lane title="Impasse" />
          <Lane title="Finalizada" />
        </Main>
      </LaneProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
