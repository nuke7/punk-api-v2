import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";

export const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" className="justify-content-between">
      <Link to="/">
        <Navbar.Brand>Beer Api</Navbar.Brand>
      </Link>

      <Link to="/search">
        <Button variant="secondary">Search</Button>
      </Link>
      <Link to="/wishlist">
        <Button variant="secondary">Wish List</Button>
      </Link>
    </Navbar>
  );
};
