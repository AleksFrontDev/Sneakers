import React from "react";
import Card from "../components/Card";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://6441a16afadc69b8e08889f4.mockapi.io/orders`
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex  align-center justify-between mb-40">
        <h1>Мои заказы</h1>
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
