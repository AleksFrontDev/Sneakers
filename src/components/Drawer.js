import React from "react";

const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="drawer d-flex flex-column">
      <h2 className="mb-10 d-flex justify-between">
        Корзина
        <img
          onClick={onClose}
          className="cu-p"
          width={30}
          height={30}
          src="/img/ButtonRemove.png"
          alt="close"
        />
      </h2>
      {items.length > 0 ? (
        <div>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="description mr-20">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="removeButton"
                  width={30}
                  height={30}
                  src="/img/ButtonRemove.png"
                  alt="remove"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img
            className="mb-20"
            width={120}
            height={120}
            src="/img/emptyBox.png"
            alt="EmptyCart"
          />
          <h2>Корзина пустая</h2>
          <p className="opacity-6">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
          <button onClick={onClose} className="greenButton">
            Вернуться назад
          </button>
        </div>
      )}

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
  );
};

export default Drawer;
