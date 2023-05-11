import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, minusCart, increaseCart } from "../../stores/cartSlice";

const CartCard = (prop) => {
  const { name, amount, sid, price ,member_price} = prop.data;
  //   console.log(data);
  const dispatch = useDispatch();

  //   const handle = () => {
  //     dispatch(deleteCart({ sid }));
  //   };
  return (
    <div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <p>品名：{name}</p>
        <p>原價：{price}</p>
        <p>會員價：{member_price}</p>
        <p>金額共：{member_price * amount}</p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(minusCart({ sid }));
          }}
        >
          -
        </button>
        <input type="text" value={amount} onChange={() => {}} />
        <button
          onClick={() => {
            dispatch(increaseCart({ sid }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(deleteCart({ sid }));
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CartCard;
