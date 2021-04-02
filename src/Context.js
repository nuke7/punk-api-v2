import React, { useState, createContext } from "react";

export const BeerContext = createContext();

export const BeerProvider = (props) => {
  const loadFromLocalStorage = () => {
    const data = localStorage.getItem("wishes");
    if (data === null || data.length === 0) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };
  const [beer, setBeer] = useState([]);
  const [wishlist, setWishlist] = useState(loadFromLocalStorage());
  const [search, setSearch] = useState("");

  return (
    <BeerContext.Provider
      value={{
        value1: [beer, setBeer],
        value2: [wishlist, setWishlist],
        value3: [search, setSearch],
      }}>
      {props.children}
    </BeerContext.Provider>
  );
};
