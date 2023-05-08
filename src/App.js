import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import AppContext from "./context";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse, favoritesResponse] =
          await Promise.all([
            axios.get(`https://6441a16afadc69b8e08889f4.mockapi.io/items`),
            axios.get(`https://6441a16afadc69b8e08889f4.mockapi.io/cart`),
            axios.get(`https://6441a16afadc69b8e08889f4.mockapi.io/favorite`),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorite(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://6441a16afadc69b8e08889f4.mockapi.io/cart/${obj.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          `https://6441a16afadc69b8e08889f4.mockapi.io/cart`,
          obj
        ); //Тут запрос для сохранения данных из корзины в BackEnd(вместо "get" написали "post")
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6441a16afadc69b8e08889f4.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
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
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
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
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          />
          <Route
            path="/favorites"
            element={<Favorites onAddFavorite={onAddFavorite} />}
            exact
          />
          <Route path="/orders" element={<Orders />} exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
