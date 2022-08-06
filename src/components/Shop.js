import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Item from './Item.js';

const Shop = () => {

  const [items, setItems] = useState(localStorage.getItem('amount'));
  const [total, setTotal] = useState(localStorage.getItem('totalPrice'));

  const handleClick = (num, price) => {
    const totalPrice = (num * price);
    const roundPrice = Math.round(totalPrice * 100) / 100;
    const finalAmt = parseInt(num) + parseInt(items);

    const finalPrice = Math.round((parseFloat(total) + parseFloat(roundPrice)) * 100) / 100;

    localStorage.setItem('amount', finalAmt);
    localStorage.setItem('totalPrice', finalPrice);

    setItems(finalAmt);
    setTotal(finalPrice);
  }

  const handleClear = () => {
    localStorage.clear();
    setItems(0);
    setTotal(0);
  }

  return (
    <div>
      <h1>Shop</h1>
      <Navbar />
      <div className='itemGrid'>
        <Item handleClick = {handleClick} info={
          {
            cover: '',
            name: 'Blonde',
            artist: 'Frank Ocean',
            price: 14.99
          }
        }/>
        <Item handleClick = {handleClick} info={
          {
            cover: '',
            name: '2014 Forest Hills Drive',
            artist: 'J. Cole',
            price: 11.99
          }
        }/>

      </div>
      <div className="cartContainer">
        <div className="cart">
          Shopping Cart: {items} Items <br/>
          Total: ${total}
        </div>
        <button onClick={handleClear} id="clearCart">Clear Cart</button>
        <button id="checkout">Checkout</button>
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