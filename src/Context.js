import React, { useState, createContext } from "react";

export const BeerContext = createContext();

export const BeerProvider = (props) => {
  const [beer, setBeer] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <BeerContext.Provider
      value={{ value1: [beer, setBeer], value2: [wishlist, setWishlist] }}>
      {props.children}
    </BeerContext.Provider>
  );
};
