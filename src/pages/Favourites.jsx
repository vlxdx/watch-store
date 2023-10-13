import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favourites() {
  const { favourites, onAddToFavourite } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="watches">
        <h1>Saved</h1>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favourites.map((item, index) => (
          <Card
            key={index}
            favourited={true}
            onFavourite={onAddToFavourite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
