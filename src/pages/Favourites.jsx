import Card from '../components/Card';

function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content">
      <div className="watches">
        <h1>Saved</h1>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item, index) => (
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
