import Container from "../../utilities/Container";
import "./banner.css";
import bannerImage from '../../../assets/bannerImage.png'
const Banner = () => {
  return (
    <div className="bannerContainer">
      <Container className="bannerContentContiner">
        <div className="banner-content">
          <div className="banner-text-container">
            <p className="banner-title">
              Experience food <br /> <span>Delivery</span> like no other
            </p>
            <p className="banner-description">
              We deliver the food of your choice wherever, whenever. Select your
              food from only the top restaurants in the area, and get it in a
              flash. Download the app now to discover more.
            </p>
          </div>
          <div className="image-container">
            <img src={bannerImage} alt="Banner Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
