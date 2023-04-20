import React from "react";
import styles from "./Card.module.scss";
const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
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
        <img
          onClick={onClickPlus}
          className={styles.plus}
          width={20}
          height={20}
          src={isAdded ? "/img/btn-checked.png" : "/img/btn-plus.png"}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
