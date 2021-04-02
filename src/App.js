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
            <h2 style={{ margin: "4rem auto" }}>
              Welcome to the craft-beer searching app!
            </h2>
            <h4 style={{ margin: "2rem 2rem" }}>
              On the search tab, you can search for craft beers by name, and you can add
              any you like to your wish list. Happy searching! :)
            </h4>
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
