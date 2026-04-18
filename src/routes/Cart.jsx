import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className="space-y-5 sm:space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/70 px-4 py-6 shadow-[0_18px_50px_rgba(120,113,108,0.12)] backdrop-blur sm:rounded-4xl sm:px-6 sm:py-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_18px_50px_rgba(2,6,23,0.35)]">
                {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">Cart</p> */}
                <h1 className="mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl dark:text-stone-100">Your selected items</h1>
                <p className="mt-2 text-stone-600 dark:text-stone-300">Review quantities, Remove items, or head back to the Shop for more.</p>
            </div>
            <div className="space-y-4">
                {cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />))}
                {cartItems.length === 0 ? (
                    <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-white/70 px-6 py-10 text-center text-stone-600 dark:border-stone-700 dark:bg-slate-900/60 dark:text-stone-300">
                        Your cart is empty.
                    </div>
                ) : null}
            </div>
            <div className="flex justify-stretch sm:justify-end">
                <div className="w-full rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white sm:w-auto dark:bg-stone-100 dark:text-stone-950">
                    Total: ₹{cartTotal}
                </div>
            </div>
        </div>
    )
}

export default Cart
