import "./styles.css";
import BurgerKenzie from "../Images/burguerkenzie.png";

const Header = ({ showProducts }) => {
  return (
    <header className="clusterHeader">
      <img src={BurgerKenzie} alt="Logo" className="logo" />
      <div className="searchDiv">
        <input
          type="search"
          onChange={(e) => showProducts(e.target.value)}
          className="searchInput"
          placeholder="Digitar Pesquisa"
        />
        <button type="button" className="searchButton">
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;
