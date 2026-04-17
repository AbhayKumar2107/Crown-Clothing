import React, { useContext } from 'react'
import Button from './Button'
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = ()=>addItemToCart(product);

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart} >Add To Cart</Button>
    </div>
  )
}

export default ProductCard
