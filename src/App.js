function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={45} height={45} src="/img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h3>Watch Store</h3>
            <p>Online Watches</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
            <span>€119,00</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All Watches</h1>

        <div>
          <div className="card">
            <img
              width={130}
              height={130}
              src="/img/watches/1.jpg"
              alt="Watch"
            />
            <h5>Casio G-Shock Classic</h5>
            <div>
              <div>
                <span>Price:</span>
                <b>€119,00</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={130}
              height={130}
              src="/img/watches/2.jpg"
              alt="Watch"
            />
            <h5>Casio G-Shock Analog-Digital</h5>
            <div>
              <div>
                <span>Price:</span>
                <b>€149,00</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={130}
              height={130}
              src="/img/watches/3.jpg"
              alt="Watch"
            />
            <h5>Casio G-Shock Master of G</h5>
            <div>
              <div>
                <span>Price:</span>
                <b>€379,00</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={130}
              height={130}
              src="/img/watches/4.jpg"
              alt="Watch"
            />
            <h5>Casio G-Shock Limited</h5>
            <div>
              <div>
                <span>Price:</span>
                <b>€189,00</b>
              </div>
              <button className="button">
                <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
