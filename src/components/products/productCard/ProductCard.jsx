// import React from 'react';
// import './ProductCard.css';

// export const ProductCard = ({prod, addToCart}) => {

//   const handleAddToCart = () => {
//     addToCart(prod);
//   }
//   return (
//     <div className='product-card'>
//         <h1>{prod.name}</h1>
//         <p>{`Tk ${prod.price}`}</p>
//         <p>{`Quantity: ${prod.quantity}`}</p>
//         <button onClick={handleAddToCart} className='add-cart-btn'>Add to Cart</button>
//     </div>
//   );
// }

// Remove product button added
import React from "react";
import "./ProductCard.css";

export const ProductCard = ({
  prod,
  isAddedToCart,
  addToCart,
  removeFromCart,
  cartItems,
}) => {
  const handleAddToCart = () => {
    addToCart(prod);
  };

  const handleRemoveFromCart = () => {
    if (cartItems === 0) {
      alert("No product added");
      return;
    }
    removeFromCart(prod.id);
  };

  return (
    <div className="product-card">
      <h1>{prod.name}</h1>
      <p>{`Tk ${prod.price}`}</p>
      <p>{`Quantity: ${prod.quantity}`}</p>
      <button onClick={handleAddToCart} className="add-cart-btn">
        Add to Cart
      </button>
      {isAddedToCart && (
        <button onClick={handleRemoveFromCart} className="remove-cart-btn">
          Remove from Cart
        </button>
      )}
    </div>
  );
};
