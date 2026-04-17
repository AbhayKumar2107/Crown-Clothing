import React from 'react'
import Button from './Button'

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add To Cart</Button>
    </div>
  )
}

export default ProductCard
