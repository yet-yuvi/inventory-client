import { useState } from "react";
import { ProductServices } from "../../../services";

export const useProducts = () => {
  const [cart, setCart] = useState([]);
  const products = ProductServices.getProducts();

  const isProductExistInCart = (productId) => {
    return cart.some((p) => p.id === productId);
  };

  const addProductToCart = (prod) => {
    if (isProductExistInCart(prod.id)) {
      alert("Already Added");
      return;
    }
    setCart([...cart, prod]);
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(updatedCart);
  };

  const cartItems = cart.length;

  return {
    cartItems,
    products,
    isProductExistInCart,
    addProductToCart,
    removeProductFromCart,
  };
};
