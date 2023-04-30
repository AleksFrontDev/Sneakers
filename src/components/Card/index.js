import React from "react";
import styles from "./Card.module.scss";
const Card = ({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorite = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img
            onClick={onClickFavorite}
            width={30}
            height={30}
            src={isFavorite ? "/img/like.png" : "/img/unlike.png"}
            alt="unlike"
          />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Cart" />
        <h5>{title}</h5>
        <div className="d-flex justify-between">
          <div className="d-flex flex-column align-center">
            <span>Цена</span>
            <b>{price}руб.</b>
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
    </>
  );
};

export default Card;
