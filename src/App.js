import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favouritesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://6512b96bb8c6ce52b3961711.mockapi.io/cart'),
            axios.get('https://65198207818c4e98ac6073b8.mockapi.io/favourites'),
            axios.get('https://6512b96bb8c6ce52b3961711.mockapi.io/items'),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavourites(favouritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Data request error!');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6512b96bb8c6ce52b3961711.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://6512b96bb8c6ce52b3961711.mockapi.io/cart',
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert('Error when adding to cart!');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6512b96bb8c6ce52b3961711.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert('Error when deleting from cart!');
      console.error(error);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://65198207818c4e98ac6073b8.mockapi.io/favourites/${obj.id}`
        );
        setFavourites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
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
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        isItemAdded,
        onAddToFavourite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      {' '}
      <div className="wrapper">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavourite={onAddToFavourite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/favourites" element={<Favourites />} />

          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
