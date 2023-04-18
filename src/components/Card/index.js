import styles from "./Card.module.scss";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img width={30} height={30} src="/img/unlike.png" alt="unlike" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Cart" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Цена</span>
          <b>{props.price}руб.</b>
        </div>
        <button className="button">
          <img width={20} height={20} src="/img/plus.png" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
