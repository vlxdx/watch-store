import React from 'react';
import AppContext from '../context';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img
        style={{ marginBottom: '20px' }}
        width="120px"
        height="120px"
        src={image}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p style={{ opacity: '0.6' }}>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Return back
      </button>
    </div>
  );
};

export default Info;
