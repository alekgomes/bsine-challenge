import React, { createContext } from "react";

const state = {
  lane1: [["item01", "item02"]],
  lane2: [],
  lane3: [],
  lane4: [],
};

export const LaneContext = createContext(state);

export const LaneProvider = ({ children }) => {
  return <LaneContext.Provider value={state}>{children}</LaneContext.Provider>;
};
