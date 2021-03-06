import { useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BeerContext } from "../Context";

export const Search = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value1, value2, value3 } = useContext(BeerContext);
  // eslint-disable-next-line no-unused-vars
  const [beer, setBeer] = value1;
  /*  const [wishList, setWishList] = value2; */
  const [search, setSearch] = value3;

  const fetchBeer = async (search) => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${search.replaceAll(" ", "_")}`
    );
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setBeer(data);
    } else {
      setBeer([{ name: "something is wrong - response is not 200" }]);
    }
  };

  return (
    <div style={{ margin: "4rem 2rem" }}>
      <h2 style={{ margin: "1rem auto" }}>Search for Craft Beers by name</h2>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={() => fetchBeer(search)}>
            Search
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              fetchBeer(search);
            }
          }}
        />
      </InputGroup>
    </div>
  );
};
