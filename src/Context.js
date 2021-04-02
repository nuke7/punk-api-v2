import React, { useState, createContext } from "react";

export const BeerContext = createContext();

export const BeerProvider = (props) => {
  const [beer, setBeer] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishes")));
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
