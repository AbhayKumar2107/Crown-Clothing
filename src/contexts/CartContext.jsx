import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}



const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        //if item doesn't match the id [true] then keep the value otherwise just filter it out[false].
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}


const clearCartItem = (cartItems, cartItemToClear ) =>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFormCart: () => {},
    clearItemFormCart: () =>{},
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const cartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    const addItemToCart = (productToAdd) => {
        setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
    }

    const removeItemFormCart = (cartItemToRemove) => {
        setCartItems((prevCartItems) => removeCartItem(prevCartItems, cartItemToRemove));
    }

     const clearItemFormCart = (cartItemToClear) => {
        setCartItems((prevCartItems) => clearCartItem(prevCartItems, cartItemToClear));
    }

    const value = { addItemToCart, cartItems, cartCount, removeItemFormCart, clearItemFormCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
