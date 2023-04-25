import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`https://6441a16afadc69b8e08889f4.mockapi.io/items`) // получение просто item
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get(`https://6441a16afadc69b8e08889f4.mockapi.io/cart`) // получение item для корзины
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);
  const onAddToCart = (obj) => {
    axios.post(`https://6441a16afadc69b8e08889f4.mockapi.io/cart`, obj); //Тут запрос для сохрания данных из корзины в BackEnd(вместо "get" написали "post")
    setCartItems((prev) => [...prev, obj]);
  };
  const onAddFavorite = (obj) => {
    axios.post(`https://6441a16afadc69b8e08889f4.mockapi.io/favorite`, obj); //Тут запрос для сохрания данных из корзины в BackEnd(вместо "get" написали "post")
    setFavorite((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://6441a16afadc69b8e08889f4.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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
      <div className="content p-40">
        <div className="d-flex  align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу : "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-bLock   d-flex">
            <img width={40} height={40} src="/img/search.jpg" alt="Search" />
            {searchValue.toLowerCase() && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                width={30}
                height={30}
                src="/img/ButtonRemove.png"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск ..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title
                .toLowerCase()
                .trim()
                .includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddFavorite(item)}
                onPlus={(obj) => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
