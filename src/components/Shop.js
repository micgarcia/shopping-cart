import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Item from './Item.js';

const Shop = () => {
  if (localStorage.getItem('amount') === null) {
    localStorage.setItem('amount', 0);
    localStorage.setItem('totalPrice', 0);
  }

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
    <div id="shopPage">
      <Navbar />
      <div className='itemGrid'>
        <Item handleClick = {handleClick} info={
          {
            cover: 'https://cdn2.thelineofbestfit.com/images/remote/https_cdn2.thelineofbestfit.com/media/2014/frank-ocean-blond-compressed-0933daea-f052-40e5-85a4-35e07dac73df.jpg',
            name: 'Blond',
            artist: 'Frank Ocean',
            price: 14.99
          }
        }/>
        <Item handleClick = {handleClick} info={
          {
            cover: 'https://m.media-amazon.com/images/I/71v0b7YG+zL._SL1500_.jpg',
            name: '2014 Forest Hills Drive',
            artist: 'J. Cole',
            price: 11.99
          }
        }/>

        <Item handleClick = {handleClick} info={
          {
            cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/95f441a398374c7acc4ac72667ceb42e.jpg',
            name: '1989',
            artist: 'Taylor Swift',
            price: 12.99
          }
        }/>

        <Item handleClick = {handleClick} info={
          {
            cover: 'https://f4.bcbits.com/img/a0227791277_10.jpg',
            name: 'Sad Clown Bad Summer EP',
            artist: 'Atmosphere',
            price: 9.99
          }
        }/>

        <Item handleClick = {handleClick} info={
          {
            cover: 'https://m.media-amazon.com/images/I/51USihwOUeL.jpg',
            name: 'Worthy',
            artist: 'Beautiful Eulogy',
            price: 12.99
          }
        }/>

        <Item handleClick = {handleClick} info={
          {
            cover: 'https://m.media-amazon.com/images/I/51v8Vm3ij3L.jpg',
            name: '808s and Heartbreak',
            artist: 'Kanye West',
            price: 13.99
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