import React from "react";
import ReactDOM from "react-dom";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Lane from "./Components/Lane";
import Main from "./Layout/Main";
import { LaneProvider } from "./Context/LaneContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./style.scss";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <LaneProvider>
        <Main>
          <DndProvider backend={HTML5Backend}>
            <Lane title="Planejada" id="lane01" />
            <Lane title="Executando" id="lane02" />
            <Lane title="Impasse" id="lane03" />
            <Lane title="Finalizada" id="lane04" />
          </DndProvider>
        </Main>
      </LaneProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
