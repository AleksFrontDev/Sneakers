const App = () => {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Logo"
          />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5"> Магазин лучших кроссовок</p>
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
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
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
