function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={130} height={130} src="/img/watches/1.jpg" alt="Watch" />
      <h5>Casio G-Shock Classic</h5>
      <div className="addToCart">
        <div className="price">
          <span>Price:</span>
          <b>€119,00</b>
        </div>
        <button className="button">
          <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
