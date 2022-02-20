import "./styles.css";

const Product = ({ product, handleClick }) => {
  return (
    <div className="productDiv">
      <div className="imgDiv">
        <img src={product.img} alt={product.name}></img>
      </div>
      <h3 className="name">{product.name}</h3>
      <label className="category">{product.category}</label>
      <p className="price">R$ {product.price.toFixed(2).replace(".", ",")}</p>
      <button
        type="button"
        className="button"
        onClick={() => handleClick(product.id)}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Product;
