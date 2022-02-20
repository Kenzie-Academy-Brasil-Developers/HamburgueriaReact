import "./styles.css";
import CartProduct from "../CartProduct";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <div className="clusterCart">
      <div className="cartHeader">
        <p>Carrinho de compras</p>
      </div>
      {currentSale[0] !== undefined ? (
        <div className="cart--on">
          <div>
            {currentSale.map((product) => (
              <div key={product.id}>
                <CartProduct
                  product={product}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                />
              </div>
            ))}
          </div>
          <div className="totalMoney">
            <p className="valueTitle">Total</p>
            <span className="value">
              R$
              {currentSale
                .reduce((a, b) => a + b.price, 0)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>
          <div>
            <button
              className="removeAll"
              type="button"
              onClick={() => setCurrentSale([])}
            >
              Remover todos
            </button>
          </div>
        </div>
      ) : (
        <div className="cart--off">
          <h3 className="empty--h3">Sua sacola está vazia</h3>
          <span className="empty--spam">Adicione itens</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
