import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {/* <CartItem id={1} price={2500} name={"Macbook"} /> */}
        {cartItems.map((c, index) => (
          <li key={c.id}>
            <CartItem
              id={c.id}
              quantity={c.totalQty}
              price={c.price}
              total={c.totalPrice}
              name={c.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
