import { useContext } from "react";
import { BeerContext } from "../Context";

export const Grid = (props) => {
  const [beer, setBeer] = useContext(BeerContext);

  return (
    <div>
      {beer.length !== 0
        ? beer.map((beer, index) => {
            return <p key={index}>{beer.name}</p>;
          })
        : "No such beer"}
    </div>
  );
};
