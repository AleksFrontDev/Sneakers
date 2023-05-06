import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img
              className="mr-15 mt-10"
              width={55}
              height={55}
              src="/img/logo.png"
              alt="Logo"
            />
            <div>
              <h3 className="text-uppercase">REACT SNEAKERS</h3>
              <p className="opacity-5 "> Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={20} height={20} src="/img/cart.png" alt="Корзина" />
            <span> 1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img
                className="mr-15 cu-p"
                width={20}
                height={20}
                src="/img/unlike.png"
                alt="Закладки"
              />
            </Link>
          </li>
          <li>
            <img
              width={20}
              height={20}
              src="/img/user.png"
              alt="Пользователь"
            />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
