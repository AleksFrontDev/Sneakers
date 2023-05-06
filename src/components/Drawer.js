import React from "react";
import Info from "./info";
import AppContext from "../context";
import axios from "axios";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://6441a16afadc69b8e08889f4.mockapi.io/orders`,
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://6441a16afadc69b8e08889f4.mockapi.io/cart` + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      console.log("Не удалось создать заказ :(");
    }
    setIsLoading(false);
  };

  return (
    <div className="drawer d-flex flex-column flex">
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
              <div key={obj.id} className="cartItem d-flex align-center">
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
            <button disabled={isLoading} onClick={onClickOrder}>
              Оформить заказ
            </button>
          </div>
        </div>
      ) : (
        <Info
          title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
          description={
            isOrderComplete
              ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
              : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          }
          image={isOrderComplete ? "/img/acsessOrder.png" : "/img/emptyBox.png"}
        />
      )}
    </div>
  );
};

export default Drawer;
