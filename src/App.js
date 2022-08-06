import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}



export default App;

/*
  -Have a homepage with links to shop and shopping cart
    -Shop page has items to buy with ability to increment how many
      items they want. Each item has add to cart button.
    -Cart page (or could be on same page as shop) will display what
      and how many items are in the cart.

  -Will need a route for homepage, shop page and maybe cart page
  -Will need components for:
    -homepage
    -shop page
    -cart page
    -for products
    -nav bar
*/