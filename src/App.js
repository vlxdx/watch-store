import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

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
    axios
      .get('https://65198207818c4e98ac6073b8.mockapi.io/favourites')
      .then((res) => {
        setFavourites(res.data);
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

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://65198207818c4e98ac6073b8.mockapi.io/favourites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          'https://65198207818c4e98ac6073b8.mockapi.io/favourites',
          obj
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to Favourites');
    }
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
