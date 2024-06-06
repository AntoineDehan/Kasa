import { Link } from "react-router-dom";
import { logementList } from "../../data/logements/logementList";
import "../../styles/css/card/style.css";

function Card() {
  return (
    <div className="card--conteneur">
      {logementList.map((liste) => {
        const { id, cover, title } = liste;

        return (
          <div className="card" key={id}>
            <Link>
              <img src={cover} alt={title} />
              <h2>{title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
