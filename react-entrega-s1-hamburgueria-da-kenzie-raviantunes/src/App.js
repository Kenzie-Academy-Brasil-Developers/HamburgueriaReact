import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import ProductsList from "./ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const showProducts = (input) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(input) ||
          product.category.toLowerCase().includes(input)
      )
    );
  };

  const handleClick = (productId) => {
    if (!currentSale.find((product) => product.id === productId)) {
      setCurrentSale([
        ...currentSale,
        products.find((product) => product.id === productId),
      ]);
    }
  };

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header showProducts={showProducts} />
      <main className="main">
        <section>
          <ProductsList
            handleClick={handleClick}
            products={products}
            showProducts={showProducts}
            filteredProducts={filteredProducts}
          />
        </section>
        <section className="cartSection">
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </main>
    </div>
  );
}

export default App;
