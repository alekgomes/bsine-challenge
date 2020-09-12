import React from "react";
import ReactDOM from "react-dom";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Lane from "./Components/Lanes";
import Main from "./Layout/Main";
import "./style.scss";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <Lane title="Planejada" />
      </Main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
