import Card from "../../componants/Card/index";
import Banner from "../../componants/Banner/index";
import Background from "../../assets/BannerBG.png";

import "../../styles/css/home/style.css";

function Home() {
  return (
    <div className="main-conteneur">
      <Banner image={Background} titre="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
}

export default Home;
