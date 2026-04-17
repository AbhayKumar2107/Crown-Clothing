import { useContext } from "react";
import ShoppingIcon from "../assets/shopping-bag.svg"
import { CartContext } from "../contexts/CartContext";

const CartIcon = () => {

  const {cartCount} = useContext(CartContext);
  return (
    <div className="w-6 h-6 flex">
      <img
        src={ShoppingIcon}
        alt="Shopping cart"
        className="w-full h-full object-contain"
      />
      <span className="">{cartCount}</span>
    </div>
  )
}

export default CartIcon;
