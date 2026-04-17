import React from 'react'

const CartItem = ({cartItem}) => {

    const {name, quantity, imageUrl, price} = cartItem;

  return (
    <div>
        <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <span>{quantity}</span>
      <p>{price}</p>
    </div>
  )
}

export default CartItem
