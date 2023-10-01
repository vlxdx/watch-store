import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavourite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavourite = () => {
    onFavourite({ title, imageUrl, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img
          src={isFavourite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Unliked"
        />
      </div>
      <img width={130} height={130} src={imageUrl} alt="Watch" />
      <h5>{title}</h5>
      <div className={styles.addToCart}>
        <div className={styles.price}>
          <span>Price:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
