import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://6512b96bb8c6ce52b3961711.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get('https://6512b96bb8c6ce52b3961711.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post('https://6512b96bb8c6ce52b3961711.mockapi.io/cart', obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6512b96bb8c6ce52b3961711.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavourite = (obj) => {
    axios.post('https://65198207818c4e98ac6073b8.mockapi.io/favourites', obj);
    setFavourites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
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
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavourite={(obj) => onAddToFavourite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
