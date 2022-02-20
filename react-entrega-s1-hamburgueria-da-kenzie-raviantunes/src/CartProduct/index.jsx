import "./styles.css";

const CartProduct = ({ product, currentSale, setCurrentSale }) => {
  const remove = (removedProduct) => {
    return setCurrentSale(
      currentSale.filter((product) => removedProduct !== product.id)
    );
  };

  return (
    <div className="clusterCartDiv">
      <div className="cartImgDiv">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="buttonFlex">
        <div className="infoDiv">
          <p className="cartProdName">{product.name}</p>
          <span className="cartProdCategory">{product.category}</span>
        </div>
        <button
          className="cartProdButton"
          type="button"
          onClick={() => remove(product.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
