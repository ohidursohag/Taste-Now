import Container from "../../utilities/Container";
import SectionTitle from "../../utilities/SectionTitle";
import img1 from "../../../assets/images/know-us-1.png";
import img2 from "../../../assets/images/know-us-2.png";
import './know-us.css'
const KnowUs = () => {
  return (
    <div className={'know-us'}>
      {/* Title */}
      <Container >
      <SectionTitle title={"Get to know "} titleColored={"us"} className={'section-title'}/>
        <div className="know-us-container">
        <figure className="item">
          <img src={img1} alt="teamwork image" />
        </figure>
        <div className="item">
          <h4 className="title1">
            <span>Teamwork </span>
            <span>is the key to <br /> our sucess</span>
          </h4>
          <p className="description">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
        <div className="item">
          <h4 className="title2">
            <span>We are all in for the</span>
            <br />
            <span>enviroment</span>
          </h4>
          <p className="description">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
        <figure className="item">
          <img src={img2} alt="team environment image" />
        </figure>
        </div>
      </Container>
    </div>
  );
};

export default KnowUs;
