import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div>
            <h1>I'm the checkout page</h1>
            <div>
                {cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))}
            </div>
            <div>Total:{cartTotal}</div>
        </div>
    )
}

export default Cart
