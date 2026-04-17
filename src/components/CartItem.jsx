import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ cartItem }) => {

  const { name, quantity, imageUrl, price } = cartItem;
  const { clearItemFormCart, addItemToCart, removeItemFormCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFormCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFormCart(cartItem);

  return (
    <div>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <span>{name}</span>
      <span>
        <div onClick={removeItemHandler} >-</div>
        <span>{quantity}</span>
        <div onClick={addItemHandler} >+</div>
      </span>
      <span>{price}</span>
      <span>Total:{price * quantity}</span>
      <button onClick={clearItemHandler} >&#10005;</button>
    </div>
  )
}

export default CartItem
