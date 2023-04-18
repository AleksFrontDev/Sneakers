import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay ">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-10 d-flex justify-between">
          Корзина
          <img
            className="cu-p"
            width={30}
            height={30}
            src="/img/ButtonRemove.png"
            alt="remove"
          />
        </h2>

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
  );
};

export default Drawer;
