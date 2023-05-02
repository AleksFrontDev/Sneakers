import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log("app cart items", cartItems);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemsResponse = await axios.get(
        `https://6441a16afadc69b8e08889f4.mockapi.io/items`
      ); // получение просто item

      const cartResponse = await axios.get(
        `https://6441a16afadc69b8e08889f4.mockapi.io/cart`
      ); // получение item для корзины

      const favoritesResponse = await axios.get(
        `https://6441a16afadc69b8e08889f4.mockapi.io/favorite`
      ); // получение просто item
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorite(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://6441a16afadc69b8e08889f4.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      const request = axios.post(
        `https://6441a16afadc69b8e08889f4.mockapi.io/cart`,
        obj
      ); //Тут запрос для сохранения данных из корзины в BackEnd(вместо "get" написали "post")
      // Add temporarirly to app state without ID to make the app feel faster
      setCartItems((prev) => [...prev, obj]);
      request.then((response) => {
        if (response.data != null && response.data.id != null) {
          obj.id = response.data.id;
          // Setting state to previous value because we already updated the object ref
          setCartItems((prev) => prev);
        }
      });
    }
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://6441a16afadc69b8e08889f4.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://6441a16afadc69b8e08889f4.mockapi.io/favorite/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          `https://6441a16afadc69b8e08889f4.mockapi.io/favorite`,
          obj
        ); //Тут запрос для сохранения данных из корзины в BackEnd(вместо "get" написали "post")
        setFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(`Не удалось добавить в фавориты`);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
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
              cartItems={cartItems}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddFavorite={onAddFavorite} />
          }
          exact
        />
      </Routes>
    </div>
  );
};

export default App;
