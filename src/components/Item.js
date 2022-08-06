import React from 'react';

const Item = ({info}) => {
  return (
    <div>{info.name}</div>
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