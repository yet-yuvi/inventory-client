import { useState } from "react";
import { ProductCard } from "./productCard";
import "./Products.css";

export const Products = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: "1",
      name: "Computer",
      price: "70000",
      quantity: "20",
    },
    {
      id: "2",
      name: "Laptop",
      price: "100000",
      quantity: "10",
    },
  ];

  const productExistInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const addProductToCart = (prod) => {
    if (productExistInCart(prod.id)) {
      alert("Already Added");
      return;
    }
    console.log(prod);
    setCart([...cart, prod]);
    console.log(cart);
  };

  const cartItems = cart.length;

  return (
    <div className="products">
      <div>
        <h3>{`In Cart: ${cartItems}`}</h3>
      </div>
      <div className="product-grid">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              prod={product}
              addToCart={addProductToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
