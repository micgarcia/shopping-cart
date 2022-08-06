import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div id="homePage">
      <div className="iconContainer">
        <Link to="/" className="material-icons house" id="homeIcon">
          home
        </Link>
        <Link to="/shop" className="material-icons store" id="storeIcon">
          store
        </Link>
      </div>
    </div>
  )
}

export default Home;