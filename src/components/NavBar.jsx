import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/shop">Shop</Link> |{' '}
      <Link to="./checkout">🛒Cart: {totalItems}</Link>
    </nav>
  );
};

export default NavBar;
