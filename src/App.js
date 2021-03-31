import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BeerProvider } from "./Context";
import { Search } from "./components/Search";
import { Grid } from "./components/Grid";
import { WishList } from "./components/WishList";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BeerProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/search">
            <NavBar />
            <Search />
            <Grid />
          </Route>
          <Route exact path="/">
            <NavBar />
          </Route>
          <Route exact path="/wishlist">
            <NavBar />
            <WishList />
          </Route>
        </div>
      </BrowserRouter>
    </BeerProvider>
  );
}

export default App;
