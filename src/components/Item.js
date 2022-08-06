import React, {useState} from 'react';


const Item = ({info, handleClick}) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(quantity, info.price);
    setQuantity(1);
  }


  return (
    <div className='itemContainer'>
      <div className="albumInfo">
        <img className='albumCover' alt='' src={info.cover}></img>
        <h2 className='albumName'>{info.name}</h2>
        <h3 className='albumArtist'>{info.artist}</h3>
        <h4 className='albumPrice'>${info.price}</h4>
      </div>
      <form className='itemForm' onSubmit={handleSubmit}>
        <label>Quantity:</label>
        <input type='number' value={quantity} onChange={handleChange}/>
        <button type='submit'>Add to Cart</button>
      </form>

    </div>

  )
}

export default Item;

/*
-Items should be in a container that has:
-Picture
-name of item
-description
-form that has input to select how many you want
  -button to add to cart
  -when button is clicked, form is submitted and cart is updated
  */