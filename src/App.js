import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BeerProvider } from "./Context";
import { Search } from "./components/Search";
import { Grid } from "./components/Grid";
import { WishList } from "./components/WishList";
import { HashRouter, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BeerProvider>
      <HashRouter>
        <div className="App">
          <Route path="/search">
            <NavBar />
            <Search />
            <Grid />
          </Route>
          <Route path="/">
            <NavBar />
          </Route>
          <Route path="/wishlist">
            <NavBar />
            <WishList />
          </Route>
        </div>
      </HashRouter>
    </BeerProvider>
  );
}

export default App;
