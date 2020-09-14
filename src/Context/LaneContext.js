import React, { useState, createContext } from "react";

export const LaneContext = createContext();

export const LaneProvider = ({ children }) => {
  const [state, setSate] = useState({
    lane01: { id: "lane01", infos: [{ title: "Title", body: "Body" }, { title: "Teste", body: "Body" }] },
    lane02: { id: "lane02", infos: [] },
    lane03: { id: "lane03", infos: [{ title: "Title", body: "Body" }] },
    lane04: { id: "lane04", infos: [] },
  });

  const addInfos = (laneId, information) => {
    const currState = { ...state };
    currState[laneId].infos = [...currState[laneId].infos, information]
    setSate(currState);
  };

  const removeInfos = (laneId, infoTitle) => {
    const currState = { ...state };
    const itemIdex = currState[laneId].infos.findIndex((title) => title === infoTitle)
    currState[laneId].infos.splice(itemIdex, 1)
    setSate(currState)
  }

  const moveCard = (souceLane, cardTitle, destinationLane) => {
    console.log(state)
    // // copy infos
    const currState = { ...state };
    const information = currState[souceLane].infos.filter((info) => info.title === cardTitle)[0]
    currState[destinationLane].infos = [...currState[destinationLane].infos, information]

    const sourceCardIndex = currState[souceLane].infos.findIndex(info => info.title === information.title)
    currState[souceLane].infos.splice(sourceCardIndex, 1)


    setSate(currState)
    // // remove infos
    console.log(state)
  }

  return (
    <LaneContext.Provider value={{ state, addInfos, removeInfos, moveCard }}>
      {children}
    </LaneContext.Provider>
  );
};
