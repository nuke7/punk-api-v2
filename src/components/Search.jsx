import { useContext, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BeerContext } from "../Context";

export const Search = (props) => {
  const [beer, setBeer] = useContext(BeerContext);
  const [search, setSearch] = useState("");

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
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={() => fetchBeer(search)}>
            Search
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <h4>Beer api</h4>
    </div>
  );
};
