import './App.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites';

import SneakersService from './API/SneakersService'

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import AppContext from './context'
import Orders from './pages/Orders/Orders';



function App() {

  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          SneakersService.getSneakers(),
          SneakersService.getCartItems(),
          SneakersService.getFavorites()
        ]);

        setIsLoading(false);
        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных :(');
        console.error(error);
      }
    }
    fetchData();

  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findCartItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findCartItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://63a98589100b7737b99480ec.mockapi.io/cart/${findCartItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://63a98589100b7737b99480ec.mockapi.io/cart/', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Не удалось добавить товар в корзину :(')
      console.error(error);
    }

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onRemoveSearchItems = () => {
    setSearchValue('')
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63a98589100b7737b99480ec.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины :(');
      console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://63a98589100b7737b99480ec.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://63a98589100b7737b99480ec.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты :(');
      console.error(error);
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }


  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToFavorite,
        onAddToCart
      }}
    >
      <div className={`page ${cartOpened && 'opened'}`}>
      <div className="wrapper">
        <Overlay
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onRemoveSearchItems={onRemoveSearchItems}
                isLoading={isLoading}
              />
            }
          />
          <Route
            exact
            path='/favorites'
            element={
              <Favorites />
            }
          >
          </Route>
          <Route exact path='/orders' element={<Orders />}>

          </Route>
        </Routes>
      </div>
    </div>
    </AppContext.Provider >
  )
}

export default App
