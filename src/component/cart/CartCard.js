import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, minusCart, increaseCart } from "../../stores/cartSlice";

const CartCard = (prop) => {
  const { name, amount, sid } = prop.data;
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
        <p>{name}</p>
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
