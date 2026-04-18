import { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ cartItem }) => {

  const { name, quantity, imageUrl, price } = cartItem;
  const { clearItemFormCart, addItemToCart, removeItemFormCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFormCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFormCart(cartItem);

  return (
    <div className="rounded-3xl border border-stone-200 bg-white/85 p-4 shadow-[0_12px_30px_rgba(120,113,108,0.08)] sm:p-5 dark:border-stone-800 dark:bg-slate-900/80">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="overflow-hidden rounded-2xl bg-stone-100 dark:bg-slate-800">
            <img className="h-28 w-full object-cover sm:h-38 sm:w-38" src={imageUrl} alt={name} />
          </div>

          <div className="space-y-2">
            {/* <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Cart Item
            </p> */}
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
              {name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
              <span className="rounded-full bg-stone-100 px-3 py-1 font-medium dark:bg-slate-800">
                Price: ₹{price}
              </span>
              {/* <span className="rounded-full bg-stone-100 px-3 py-1 font-medium dark:bg-slate-800">
                {quantity}item{quantity > 1 ? 's' : ''}
              </span> */}
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl border border-stone-200/80 bg-stone-50/80 p-4 sm:grid-cols-2 sm:items-center sm:gap-x-6 dark:border-stone-800 dark:bg-slate-950/40">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <p className="text-base font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Quantity
            </p>
            <div className="flex items-center gap-3">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-sm font-semibold text-stone-700 transition hover:border-stone-900 dark:border-stone-700 dark:text-stone-100 dark:hover:border-stone-100" onClick={removeItemHandler} >
                <FaMinus aria-hidden="true" />
              </button>
              <span className="min-w-10 text-center text-base font-semibold text-stone-800 dark:text-stone-100">{quantity}</span>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-sm font-semibold text-stone-700 transition hover:border-stone-900 dark:border-stone-700 dark:text-stone-100 dark:hover:border-stone-100" onClick={addItemHandler} >
                <FaPlus aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="space-y-2 sm:text-right flex flex-col justify-center items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Total
            </p>
            <p className="text-xl font-semibold text-stone-900 dark:text-stone-100">
              ₹{price * quantity}
            </p>
            <button className="rounded-full px-3 py-2 text-sm font-semibold bg-rose-100 text-rose-600 transition hover:bg-rose-200 dark:hover:bg-rose-950/30" onClick={clearItemHandler} >
              Remove item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
