function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2>
          Cart
          <img
            style={{ cursor: 'pointer' }}
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/watches/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="watch">
              <p>Casio G-Shock Classic</p>
              <b>€119,00</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/watches/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="watch">
              <p>Casio G-Shock Classic</p>
              <b>€119,00</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/watches/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="watch">
              <p>Casio G-Shock Classic</p>
              <b>€119,00</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>€119,00</b>
            </li>
            <li>
              <span>Sales Tax:</span>
              <div></div>
              <b>€9,00</b>
            </li>
          </ul>
          <button className="greenButton">
            Proceed to Checkout <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
