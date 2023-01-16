import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   sid: 0,
    //   amount: 0,
    //   name: "",
    //   price: 0,
    //   img: "",
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { sid, amount, name, price, img } = action.payload;
      const index = state.cart.indexOf((value) => {
        return value.sid === sid;
      });
      if (index === -1) {
        state.cart.push({ sid, name, img, price, amount });
      }
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
