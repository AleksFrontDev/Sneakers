import React from "react";

const Header = (props) => {
  return (
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
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={40} height={40} src="/img/cart.png" alt="Cart" />
          <span> 1205 руб.</span>
        </li>
        <li>
          <img width={40} height={40} src="/img/user.png" alt="User" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
