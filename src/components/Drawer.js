function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart
          <img
            onClick={onClose}
            style={{ cursor: 'pointer' }}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="watch">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
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
        ) : (
          <div className="cartEmpty">
            <img
              style={{ marginBottom: '20px' }}
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Cart is empty</h2>
            <p style={{ opacity: '0.6' }}>Add any watch to make an order</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Return back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
