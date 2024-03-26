import Banner from "../components/Home/Banner/Banner";
import KnowUs from "../components/Home/KnowUs/KnowUs";
import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import "./pages.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <PopularCategories/>
      <KnowUs />
    </div>
  );
};

export default Home;
