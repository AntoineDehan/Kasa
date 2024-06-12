import React from "react";
import { useParams } from "react-router-dom";

import Slideshow from "../../componants/Slider/index";
import Error from "../../componants/Error";
import Collapse from "../../componants/Collapse";
import Rating from "../../componants/Rating";

import { logementList } from "../../data/logements/logementList";

import "../../styles/css/logement/style.css";

function Logement() {
  // Je récupère l'ID sur lequel j'ai cliqué depuis le component Card
  const { logementId } = useParams();
  console.log(logementId);

  // Je récupère les informations du logement qui correspond à l'ID
  const logement = logementList.find((logement) => logement.id === logementId);

  if (logement === undefined) {
    return <Error />;
  }

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />
      <div className="logement__contenu">
        <div className="logement__titles">
          <div className="titles">
            <h2>{logement.title}</h2>
            <p>l{logement.location}</p>
          </div>
          <div className="etiquettes">
            {logement.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="logement__host">
          <div className="host__info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Hôte du logement" />
          </div>
          <Rating scaleValue={logement.rating} />
        </div>
      </div>
      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
