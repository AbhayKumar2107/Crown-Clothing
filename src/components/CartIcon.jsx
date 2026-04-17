import ShoppingIcon from "../assets/shopping-bag.svg"

const CartIcon = () => {
  return (
    <div className="w-6 h-6 flex">
      <img
        src={ShoppingIcon}
        alt="Shopping cart"
        className="w-full h-full object-contain"
      />
      <span className="">0</span>
    </div>
  )
}

export default CartIcon;
