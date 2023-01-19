import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "../styles/productDetail.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../stores/cartSlice";

const ProductDetail = () => {
  //用於頁面顯示的data
  const [data, setData] = useState([]);
  //商品數量的狀態 之後要放入購物車
  const [amount, setAmount] = useState(0);

  //解構路由的sid 用於跟後端要資料的時候要帶入的東西
  const { sid } = useParams();

  //要使用store裡面的state的時候要用到的hooks
  const state = useSelector((state) => state.cart);
  //要使用store裡面的action的時候要用到的hooks
  const dispatch = useDispatch();

  //加入購物車按鈕
  const handle = () => {
    const { price, name, img, inventory } = data[0];
    // console.log(sid, name, price, img, amount ,inventory);
    dispatch(addCart({ sid, name, price, img, amount,inventory }));
  };

  //跟後端取得商品細節頁資料
  const getDetail = async function () {
    // console.log(sid);
    const product_Detail_url = `http://localhost:3005/product/pageDetailApi/${sid}`;
    const result = await axios.get(product_Detail_url);
    // console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getDetail();
  }, []);

  console.log(state.cart);
  return (
    <>
      {data.length && (
        <div className={styled.container}>
          <div className={styled.product_all}>
            <div className={styled.imgwrap}>
              <img
                src={`http://localhost:3005/product/${data[0].img}`}
                alt=""
              />
            </div>
            <div className={styled.productIntrodution}>
              <p>{data[0].name}</p>
              <p>庫存:{data[0].inventory}</p>
              <p>原價:{data[0].price}</p>
              <p>特價:{data[0].member_price}</p>
              <input
                type="number"
                onChange={(e) => {
                  setAmount(+e.target.value);
                }}
                value={amount}
              />
              <button
                onClick={() => {
                  handle();
                }}
              >
                加入購物車
              </button>
            </div>
          </div>
          <div>商品介紹</div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
