function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={45} height={45} src="/img/logo.png" alt="Logo" />
        <div>
          <h3>Watch Store</h3>
          <p>Online Watches</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="cartTotal">
          <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span>€119,00</span>
        </li>
        <li className="saved">
          <img width={20} height={20} src="/img/heart.svg" alt="Saved" />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
