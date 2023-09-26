import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={130} height={130} src={props.imageUrl} alt="Watch" />
      <h5>{props.title}</h5>
      <div className="addToCart">
        <div className="price">
          <span>Price:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={12} height={12} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
