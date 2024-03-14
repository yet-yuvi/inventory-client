import { useState } from "react";

export const useProductCart = () => {
  const [cart, setCart] = useState([]);


  const isProductExistInCart = (productId) =>
    cart.some((product) => product._id === productId);

  const addProductToCart = (product) => {
    if (isProductExistInCart(product._id)) {
      alert("Already added!!!");
      return;
    }
    setCart([...cart, product]);
  };

  const removeProductFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem._id !== productId));
  };

  return({
    cart,
    isProductExistInCart,
    addProductToCart,
    removeProductFromCart,
  });
};
