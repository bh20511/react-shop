import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, minusCart, increaseCart } from "../../stores/cartSlice";
import styled from "../../styles/cartCard.module.scss"
const CartCard = (prop) => {
  const { name, amount, sid, price ,member_price ,img} = prop.data;
  console.log(member_price)
  //   console.log(data);
  const dispatch = useDispatch();

  //   const handle = () => {
  //     dispatch(deleteCart({ sid }));
  //   };
  return (
    <div className={styled.card}>
      <div className={styled.info}>
        <div>
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

        <div>
            <img src={`http://localhost:3005/product/${img}`} />
        </div>

        
      </div>
      
      
      <div></div>
    </div>
  );
};

export default CartCard;
