import { useContext } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CartContext } from "../contexts/CartContext";

const CartIcon = () => {

  const {cartCount} = useContext(CartContext);
  return (
    <div className="relative flex h-6 w-6 items-center justify-center text-stone-700 dark:text-stone-100">
      <LiaShoppingCartSolid className="h-6 w-6" aria-hidden="true" />
      <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-stone-950 px-1 text-[10px] font-bold leading-none text-white dark:bg-stone-100 dark:text-stone-950">
        {cartCount}
      </span>
    </div>
  )
}

export default CartIcon;
