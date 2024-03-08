import { useContext } from "react";
import { CartContext } from "../../../contexts";
import { Card } from "../../../ui";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const {
    addProductToCart,
    removeProductFromCart,
    isProductExistInCart,
  } = useContext(CartContext);

  const handleAddToCart = () => addProductToCart(product);

  const handleRemoveFromCart = () => removeProductFromCart(product.id);

  const isAddedToCart = isProductExistInCart(product.id);

  return (
    <Card sx={{ width: 345 }}>
      <h2>{product.name}</h2>
      <p>{`TK ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>
      <button onClick={handleAddToCart} className="product-card-cart-btn">
        Add to Cart
      </button>
      {isAddedToCart && (
        <button
          className="product-card-cart-btn danger"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      )}
    </Card>
  );
}
