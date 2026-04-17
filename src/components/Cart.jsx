import React, { useContext } from 'react'
import Button from './Button'
import CartItem from './CartItem'
import { CartContext } from '../contexts/CartContext'

const Cart = () => {

  const {cartItems} = useContext(CartContext);

  return (
    <div className=''>
      <div className=''>
        <h1>Items:</h1>
        {cartItems.map(item=> <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button buttonType="normal" >Go To CheckOut</Button>
    </div>
  )
}

export default Cart
