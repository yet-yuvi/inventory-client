import { ProductCard } from './productCard/ProductCard';

import { useProducts } from '../../hooks';
import './Products.css';

export const Products = () => {
  const { products } = useProducts();
  
  return (
    <div className="products">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};