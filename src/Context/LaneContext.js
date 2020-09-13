import React, { useState, createContext } from "react";

export const LaneContext = createContext();

export const LaneProvider = ({ children }) => {
  const [state, setSate] = useState({
    lane01: { id: "lane01", infos: [{ title: "Title", body: "Body" }] },
    lane02: { id: "lane02", infos: [] },
    lane03: { id: "lane03", infos: [{ title: "Title", body: "Body" }] },
    lane04: { id: "lane04", infos: [] },
  });

  const addInfos = (laneId, information) => {
    const currState = { ...state };
    currState[laneId].infos = [...currState[laneId].infos, information]
    setSate(currState);
  };

  const removeInfos = (laneId="lane01", infoTitle="Title") => {
    const currState = { ...state };
    const itemIdex = currState[laneId].infos.findIndex((title) => title === infoTitle)
    currState[laneId].infos.splice(itemIdex, 1)
    setSate(currState)
  }

  return (
    <LaneContext.Provider value={{ state, addInfos, removeInfos }}>
      {children}
    </LaneContext.Provider>
  );
};
