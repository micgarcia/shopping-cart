import React from 'react';
import Navbar from './Navbar.js';
import Item from './Item.js';

const Shop = () => {

  return (
    <div>
      <h1>Shop</h1>
      <Navbar />
      <div className='itemGrid'>
        <Item info={
          {
            name: 'Blonde',
            artist: 'Frank Ocean',
            price: 14.99
          }
        }/>

      </div>
    </div>

  )
}

export default Shop;

/*
  -Have items to the left and shopping cart to the right
  -Items should be in a container that has:
    -Picture
    -name of item
    -description
    -form that has input to select how many you want
      -button to add to cart
      -when button is clicked, form is submitted and cart is updated
  -Create Item.js component that takes in a prop object that contains
    - prop {
        name: Blonde,
        artist: Frank Ocean,
        price: 14.99,
      }
    -Item component will take in that prop and display the component
  -Need to find a way to update cart price/how many items in cart
      whenever the Item component form is submitted
    -Will need to find a way to send data from child component back to parent
*/