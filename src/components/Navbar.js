import React from "react";
import {
  Link
} from "react-router-dom";


const Navbar = () => {

  return (
    <div className="navBar">
      <div className="iconContainer">
        <Link to="/" className="material-icons house" id="shopHomeIcon">
          home
        </Link>
        <Link to="/shop" className="material-icons store" id="shopStoreIcon">
          store
        </Link>
      </div>
    </div>
  )
}

export default Navbar;