import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Shop from './Shop.js';
import Cart from './Cart.js';

const Navbar = () => {

  return (
    <div>
      Navbar
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  )
}

export default Navbar;