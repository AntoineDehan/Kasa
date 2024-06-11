import Slideshow from "../../componants/Slider/index";

function Logement({ images }) {
  return (
    <div className="logement__conteneur">
      <Slideshow images={images} />
      <div className="logement__contenu">
        <div className="logement__titles">
          <div className="titles">
            <h2>title</h2>
            <p>location</p>
          </div>
          <div className="host">
            <p>hostname</p>
            {/* <img src=hostpicture alt="Hôte du logement" /> */}
          </div>
        </div>
        <div className="logement__info">
          <div className="etiquettes"></div>
          <div className="note"></div>
        </div>
        <div className="logement__collapses">
          {/* description collapse */}
          {/* equipements collapse */}
        </div>
      </div>
    </div>
  );
}

export default Logement;
