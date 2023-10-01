import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="watches">
        <h1>
          {searchValue ? `Searching for: "${searchValue}"` : 'All Watches'}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
