import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BeerProvider } from "./Context";
import { Search } from "./components/Search";
import { Grid } from "./components/Grid";

function App() {
  return (
    <BeerProvider>
      <div className="App">
        <Search />
        <Grid />
      </div>
    </BeerProvider>
  );
}

export default App;
