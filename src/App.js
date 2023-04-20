import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    React.useEffect(() => {
      fetch(`https://6441a16afadc69b8e08889f4.mockapi.io/items`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setItems(json);
        });
    }, []),
    (
      <div className="wrapper clear">
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className="d-flex  align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-bLock   d-flex">
              <img width={40} height={40} src="/img/search.jpg" alt="Search" />
              <input placeholder="Поиск ..." />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default App;
