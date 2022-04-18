import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { foodServices } from "../../services/foodServices";

export default function SectionComp() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    foodServices
      .getAllFoods()
      .then((response) => setFoodData(response.data.data));
  }, []);

  let categories = [];

  for (let i = 0; i < foodData.length; i++) {
    if (categories.includes(foodData[i].category)) {
    } else {
      categories.push(foodData[i].category);
    }
  }

  const renderSection = (data) => {
    return (
      <div>
        <div className="section-container">
          <h6> {data}</h6>
          <button className="section-button">
            Бүгдийг харах
            <img id="angle-right" src="/images/angle-right2.svg" alt="" />
          </button>
          <button className="section-mobile-button">
            <img
              id="angle-right-mobile"
              src="/images/angle-right1.svg"
              alt=""
              fill="orange"
            />
          </button>
        </div>
        <div className="section-container">
          <Cards
            foods={foodData.filter((food) => {
              return food.category == data;
            })}
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="section-container">
        <h6> Хямдралтай</h6>
        <button className="section-button">
          Бүгдийг харах
          <img id="angle-right" src="/images/angle-right2.svg" alt="" />
        </button>
        <button className="section-mobile-button">
          <img
            id="angle-right-mobile"
            src="/images/angle-right1.svg"
            alt=""
            fill="orange"
          />
        </button>
      </div>
      <div className="section-container">
        <Cards
          foods={foodData.filter((food) => {
            return food.discount > 0;
          })}
        />
      </div>
      {categories.map(renderSection)}
    </div>
  );
}
