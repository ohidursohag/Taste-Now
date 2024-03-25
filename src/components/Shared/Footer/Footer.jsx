import "./footer.css";
import facebook from '../../../assets/socialicons/facebook.svg'
import instagram from '../../../assets/socialicons/instagram.svg'
import twitter from '../../../assets/socialicons/twitter.svg'
import youtube from '../../../assets/socialicons/youtube.svg'
import Container from "../../utilities/Container";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container className={`footer-container`}>
        {/* logo & Socalmedia */}
        <div className="logo-and-socialmedia-container">
        <p className="footer-logo">Taste Now</p>
        <div className="socialmedia-container social-hidden">
          <Link to={'#'}><img src={facebook} alt="facebook icon" /></Link>
          <Link to={'#'}><img src={instagram} alt="instagram icon" /></Link>
          <Link to={'#'}><img src={twitter} alt="twitter icon" /></Link>
          <Link to={'#'}><img src={youtube} alt="youtube icon" /></Link>
        </div>
        </div>
          {/* Footer menu Container 1 */}
        <div className="footer-menu-container">       
          {/* menu list 1 */}
          <div className="menul-list">
            <Link to={'#'} className="menu-item">Seslendirme ve Alt Jazz</Link>
            <Link to={'#'} className="menu-item">Media Market</Link>
            <Link to={'#'} className="menu-item">Gillie</Link>
            <Link to={'#'} className="menu-item">Size Last</Link>
          </div>
           {/* menu list 2 */}
          <div className="menul-list">
            <Link to={'#'} className="menu-item">Self Betimes</Link>
            <Link to={'#'} className="menu-item">Yatırımcı İlişkileri</Link>
            <Link to={'#'} className="menu-item">Basal Himmler</Link>
          </div>
          {/* menu list 3 */}
          <div className="menul-list">
            <Link to={'#'} className="menu-item">Yard Market</Link>
            <Link to={'#'} className="menu-item">Is İmkanları</Link>
            <Link to={'#'} className="menu-item">Car Tercihleri</Link>
          </div>
           {/* menu list 4 */}
          <div className="menul-list">
            <Link to={'#'} className="menu-item">Hedge Karla</Link>
            <Link to={'#'} className="menu-item">Mullein Koşulları</Link>
            <Link to={'#'} className="menu-item">Autumnal Bulgier</Link>
          </div>
        </div>
        {/* social media small device */}
        <div className="socialmedia-container social-hidden-bottom">
          <Link to={'#'}><img src={facebook} alt="facebook icon" /></Link>
          <Link to={'#'}><img src={instagram} alt="instagram icon" /></Link>
          <Link to={'#'}><img src={twitter} alt="twitter icon" /></Link>
          <Link to={'#'}><img src={youtube} alt="youtube icon" /></Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
