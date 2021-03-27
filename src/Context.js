import React, { useState, createContext } from "react";

export const BeerContext = createContext();

export const BeerProvider = (props) => {
  const [beer, setBeer] = useState([]);

  return (
    <BeerContext.Provider value={[beer, setBeer]}>{props.children}</BeerContext.Provider>
  );
};
