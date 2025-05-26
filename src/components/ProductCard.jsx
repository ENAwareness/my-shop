import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) setQuantity(val);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={100} />
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
        <input type="number" value={quantity} onChange={handleChange} min="1" />
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
