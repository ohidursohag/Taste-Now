import Container from "../../utilities/Container";
import SectionTitle from "../../utilities/SectionTitle";
import "./popular-categories.css";

import { categories } from "../../../utils/data";
import { useState } from "react";


import Slider from "./Slider";
const PopularCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Pizzas");

  return (
    <div className="categories">
      <Container>
        <SectionTitle
          title={"Our Popular "}
          titleColored={"Categories"}
          className={"categories-title"}
        />
        <div className="categories-container">
          {/* categories Tab */}
          <div className="categories-item-container">
            {categories.map((category, index) => (
              <div
                onClick={() => setActiveCategory(category.name)}
                key={index}
                className={`categrory-item ${
                  activeCategory === category.name
                    ? `categrory-item-active ${
                        category.name === "Salads" ? "salads" : ""
                      }`
                    : "categrory-item-inactive"
                }`}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
          {/* Categories Slider */}
          <div className="SLider-container">
           <Slider />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularCategories;
