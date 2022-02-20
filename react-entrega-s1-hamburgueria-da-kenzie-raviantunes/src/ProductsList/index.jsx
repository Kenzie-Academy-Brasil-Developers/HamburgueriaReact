import "./styles.css";
import Product from "../Product/index.jsx";

const ProductsList = ({ products, handleClick, filteredProducts }) => {
  return (
    <div className="flexDiv">
      <section className="listSection">
        {filteredProducts.length === 0 ? (
          <>
            {products.map((product, id) => (
              <Product product={product} handleClick={handleClick} key={id} />
            ))}
          </>
        ) : (
          <>
            {filteredProducts.map((product, id) => (
              <Product product={product} handleClick={handleClick} key={id} />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default ProductsList;
