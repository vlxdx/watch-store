import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={45} height={45} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Watch Store</h3>
            <p>Online Watches</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="cartTotal">
          <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span>€ {totalPrice}</span>
        </li>
        <li className="saved">
          <Link to="/favourites">
            <img width={20} height={20} src="/img/heart.svg" alt="Saved" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
