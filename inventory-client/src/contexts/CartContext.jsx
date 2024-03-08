import { createContext } from "react";
import { useProductCart } from "../hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {
    cart,
    isProductExistInCart,
    addProductToCart,
    removeProductFromCart,
  } = useProductCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        isProductExistInCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
