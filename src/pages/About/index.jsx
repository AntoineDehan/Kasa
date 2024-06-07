import Banner from "../../componants/Banner";
import Collapse from "../../componants/Collapse";
import { aboutList } from "../../data/about/aboutList";
import Background from "../../assets/BannerBG2.png";

function About() {
  return (
    <div className="main-conteneur">
      <Banner image={Background} titre="" />
      <div className="collapse--conteneur">
        {aboutList.map((listebtn) => {
          const { title, content, id } = listebtn;

          return (
            <div key={id}>
              <Collapse title={title} content={content} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
