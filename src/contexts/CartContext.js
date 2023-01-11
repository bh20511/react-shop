import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartContextProvider = function ({ children }) {
  const [productCart, setProductCart] = useState([]);

  return <CartContext.Provider value={{productCart, setProductCart}}>{children}</CartContext.Provider>;
};
