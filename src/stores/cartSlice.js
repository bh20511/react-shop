import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
      // sid: 0,
      // amount: 0,
      // name: "",
      // price: 0,
      // img: "",
    // },
  ],
};

if (localStorage.getItem("cart")?.length) {
  console.log("local", JSON.parse(localStorage.getItem("cart")));
  initialState.cart = [...JSON.parse(localStorage.getItem("cart"))];
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      //一開始要sid 購買數量  商品名稱 單價 圖片 都是要用來顯示的
      const { sid, amount, name, price, img} = action.payload;
      const index = state.cart.findIndex((value) => {
        return value.sid === sid;
      });
      console.log(index);
      if (index === -1) {
        state.cart.push({ sid, name, img, price, amount });
        console.log("first add", state.cart);
      } else {
        state.cart[index].amount += amount;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteCart(state, action) {
      const { sid } = action.payload;
      console.log(sid);
      state.cart = state.cart.filter((e) => {
        return e.sid !== sid;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    minusCart(state, action) {
      const { sid } = action.payload;
      const index = state.cart.findIndex((value) => {
        return value.sid === sid;
      });
      if(state.cart[index].amount>=2){
        state.cart[index].amount -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseCart(state, action) {
      const { sid } = action.payload;
      const index = state.cart.findIndex((value) => {
        return value.sid === sid;
      });
      state.cart[index].amount += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addCart, deleteCart, minusCart, increaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
