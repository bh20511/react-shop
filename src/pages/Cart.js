import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import CartCard from "../component/cart/CartCard";
// import { addCart } from "../stores/cartSlice";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //   要檢查登入狀態 如果沒登入不能送出結帳
  const { myAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => state.cart);

  //總金額狀態
  const [totalPrice, setTotalPrice] = useState(0);

  // 目前結帳流程狀態
  const [nowState, setNowState] = useState(0);

  // 付款方式狀態
  const [payWay, setPayWay] = useState("現金");

  // const [orders_num, setOrders_num] = useState(0);

  //用來計算總金額
  useEffect(() => {
    let totalPrice = state.cart.reduce((a, b) => {
      return a + b.member_price * b.amount;
    }, 0);
    setTotalPrice(totalPrice);
  }, [state.cart]);

  //寫送出訂單的按鈕
  const handleSubmit = async () => {
    //先判斷有沒有登入以及購物車有沒有商品 有的話才送
    if (myAuth.authorised) {
      if (state.cart.length > 0) {
        //要送的東西只有商品sid 跟 商品數量 然後由sid去後台撈 撈到再計算金額
        const orders = state.cart.map((e) => {
          return { sid: e.sid, amount: e.amount };
        });
        const order_api = "http://localhost:3005/cart/createOrders";

        //要送的東西 orders:物件陣列,會員編號,付款方式
        const { data } = await axios.post(order_api, {
          orders,
          member_sid: myAuth.member_sid,
          payWay,
        });
        if (data.output.success) {
          console.log(data.output);
          window.open(data.output.url, '_self')

          // alert("結帳成功");
          // setNowState(2);
          // setOrders_num(data.output.orders_num);
          //接下來清空購物車狀態 還有要清空 localstorage
        } else {
          alert("結帳失敗");
        }
      }
    } else {
      alert("請先登入再結帳");
      navigate("login");
    }
  };
  //   要使用store裡面的action的時候要用到的hooks
  //     const dispatch = useDispatch();

  return (
    <>
      {/* 修改訂單＆確認訂單 都要顯示 */}
      {(nowState === 0 || nowState === 1) && (
        <div>
          {state.cart.map((e, i) => {
            return <CartCard data={e} key={i} />;
          })}
          <p>全部金額：{totalPrice}</p>
        </div>
      )}
      {/* 修改訂單部分 */}
      {nowState === 0 && (
        <div>
          <button
            onClick={() => {
              setNowState(1);
            }}
          >
            確認結帳
          </button>
        </div>
      )}
      {/* 確認訂單部分 */}
      {nowState === 1 && (
        <div>
          <p>付款方式</p>
          <button onClick={() => setPayWay("現金")}>現金</button>
          <button onClick={() => setPayWay("LinePay")}>LinePay</button>
          <button
            onClick={() => {
              setNowState(0);
            }}
          >
            上一步
          </button>

          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            送出訂單
          </button>
        </div>
      )}
      {/* 完成訂單 */}
      {nowState === 2 && (
        <div>
          <p>恭喜您完成訂單 您的訂單編號為：123456767</p>
        </div>
      )}
    </>
  );
};

export default Cart;
