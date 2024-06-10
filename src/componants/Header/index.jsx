import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "../../styles/css/header/style.css";

function Header() {
  return (
    <div className="header-conteneur">
      <div className="logo-conteneur">
        <img src={logo} alt="" />
      </div>
      <nav>
        {/* la classe name à définir avec une fonctione JS pour active/inactive */}
        <Link to="/" className="page-active">
          Accueil
        </Link>
        <Link to="/a-propos">À Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
