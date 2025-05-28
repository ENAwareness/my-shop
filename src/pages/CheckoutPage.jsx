import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart / Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>-{item.quantity}*${item.price.toFixed(2)}=
                <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total :${totalPrice.toFixed(2)}</h3>
          <button disabled>Pay Now(not implemented)</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
