const App = () => {
  return (
    <div className="wrapper clear">
      <div className="overlay ">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-10">Корзина</h2>

          <div className="items">
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/1.png)" }}
                className="cartItemImg"
              ></div>
              <div className="description mr-20">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeButton"
                width={30}
                height={30}
                src="/img/ButtonRemove.png"
                alt="remove"
              />
            </div>
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: "url(/img/2.png)" }}
                className="cartItemImg"
              ></div>
              <div className="description mr-20">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeButton"
                width={30}
                height={30}
                src="/img/ButtonRemove.png"
                alt="remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex ">
          <img
            className="mr-15 mt-10"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Logo"
          />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5 "> Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={40} height={40} src="/img/cart.png" alt="Cart" />
            <span> 1205 руб.</span>
          </li>
          <li>
            <img width={40} height={40} src="/img/user.png" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex  align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-bLock   d-flex">
            <img width={40} height={40} src="/img/search.jpg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img width={40} height={40} src="/img/unlike.png" alt="unlike" />
            </div>
            <img width={133} height={112} src="/img/1.png" alt="Cart" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена</span>
                <b>12 999руб.</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/2.png" alt="Cart" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена</span>
                <b>12 999руб.</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/3.png" alt="Cart" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена</span>
                <b>12 999руб.</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/4.png" alt="Cart" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена</span>
                <b>12 999руб.</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
