import Card from "../components/Card";
const Favorites = ({ items, onAddFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex  align-center justify-between mb-40">
        <h1>Мои закладки</h1>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              favorite={true}
              key={index}
              onFavorite={onAddFavorite}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
