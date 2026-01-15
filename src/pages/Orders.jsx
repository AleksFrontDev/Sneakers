import React from "react";
import Card from "../components/Card";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadOrders = () => {
      try {
        const savedOrders = localStorage.getItem('orders');
        if (savedOrders) {
          const parsedOrders = JSON.parse(savedOrders);
          setOrders(parsedOrders);
        }
      } catch (error) {
        console.error('Ошибка при загрузке заказов:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrders();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      {orders.length > 0 ? (
        <div>
          <div className="d-flex flex-wrap">
            {orders.flatMap((order, orderIndex) =>
              order.items.map((item, itemIndex) => (
                <Card
                  key={`${orderIndex}-${itemIndex}`}
                  loading={isLoading}
                  {...item}
                />
              ))
            )}
          </div>

          <div className="orders-list mt-40">
            <h2>Детали заказов</h2>
            {orders.map((order, index) => (
              <div key={order.id || index} className="order-card mb-30 p-20" style={{border: '1px solid #eee', borderRadius: '10px'}}>
                <div className="d-flex justify-between mb-15">
                  <h3>Заказ #{order.id || index + 1}</h3>
                  <span className="opacity-5">
                    {order.date ? new Date(order.date).toLocaleDateString() : 'Дата не указана'}
                  </span>
                </div>
                <div className="d-flex flex-wrap">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mr-20 mb-15" style={{width: '150px'}}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={50}
                        height={50}
                        style={{marginBottom: '5px'}}
                      />
                      <p style={{fontSize: '12px', marginBottom: '5px'}}>{item.title}</p>
                      <b style={{fontSize: '14px'}}>{item.price} руб.</b>
                    </div>
                  ))}
                </div>
                <div className="mt-15 pt-15" style={{borderTop: '1px solid #eee'}}>
                  <b>Итого: {order.total || order.items.reduce((sum, item) => sum + item.price, 0)} руб.</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            src="/img/emptyOrders.png"
            alt="Нет заказов"
            width={120}
            height={120}
            style={{opacity: 0.5}}
          />
          <h2 className="mt-20">У вас нет заказов</h2>
          <p className="opacity-6">Оформите хотя бы один заказ</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
