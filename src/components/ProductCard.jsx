import { useContext } from 'react'
import Button from './Button'
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = ()=>addItemToCart(product);

  return (
    <div className='group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white/85 p-3.5 shadow-[0_18px_40px_rgba(120,113,108,0.12)] backdrop-blur transition hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-4 dark:border-stone-800 dark:bg-slate-900/80 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]'>
      <div className='overflow-hidden rounded-[1.25rem] bg-stone-100 dark:bg-slate-800'>
        <img className='h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 lg:h-72' src={imageUrl} alt={`${name}`} />
      </div>
      <div className='mt-4 flex items-start justify-between gap-3'>
        <span className='text-sm font-semibold text-stone-800 sm:text-base dark:text-stone-100'>{name}</span>
        <span className='rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-700 dark:bg-slate-800 dark:text-stone-200'>₹{price}</span>
      </div>
      <div className='mt-4'>
        <Button buttonType="inverted" onClick={addProductToCart} >Add To Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard
