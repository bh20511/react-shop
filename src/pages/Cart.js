import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../component/cart/CartCard";
import { addCart } from "../stores/cartSlice";

const Cart = () => {
  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => state.cart);
  console.log(state.cart);
  //要使用store裡面的action的時候要用到的hooks
  const dispatch = useDispatch();
  //   const a = [{ name: "abc" }, { name: "bcd" }];
  //   console.log(a);

  return (
    <>
      {state.cart.map((e, i) => {
        return <CartCard data={e} key={i} />;
      })}
    </>
  );
};

export default Cart;
