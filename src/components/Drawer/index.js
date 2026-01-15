import React from "react";
import Info from "../Info";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss";

const Drawer = ({ onClose, onRemove, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);

      const newOrder = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cartItems,
        total: totalPrice
      };

      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');

      const updatedOrders = [...existingOrders, newOrder];

      localStorage.setItem('orders', JSON.stringify(updatedOrders));

      setOrderId(newOrder.id);
      setIsOrderComplete(true);
      setCartItems([]);

      localStorage.setItem('cart', JSON.stringify([]));

      console.log("Заказ успешно создан:", newOrder);

    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
      alert("Произошла ошибка при оформлении заказа. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
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
                  <b>{totalPrice.length} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 5)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={styles.orderButton}
              >
                {isLoading ? "Оформление..." : "Оформить заказ"}
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} успешно оформлен!`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete ? "/img/acsessOrder.png" : "/img/emptyBox.png"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
