import Card from "../components/Card";
const Home = ({
  items,
  searchValue,
  cartItems,
  setSearchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().trim().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddFavorite(item)}
        onPlus={(obj) => onAddToCart(item)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex  align-center justify-between mb-40">
        <h1>
          {searchValue
            ? `Поиск по запросу : "${searchValue}"`
            : "Все кроссовки"}
        </h1>
        <div className="search-bLock   d-flex">
          <img width={40} height={40} src="/img/search.jpg" alt="Search" />
          {searchValue.toLowerCase() && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={30}
              height={30}
              src="/img/ButtonRemove.png"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск ..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;