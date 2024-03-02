import React from "react";
import Card from "../components/Card/Card";
import "../scss/MainPage.scss";

const MainPage = () => {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="filters">
            <h2>Опыт</h2>
            <label for="checkbox1">
              Без опыта
              <input type="checkbox" id="checkbox1" />
            </label>
            <label for="checkbox2">
              Год и более
              <input type="checkbox" id="checkbox2" />
            </label>
            <h2>Резюме</h2>
            <label for="checkbox3">
              Без резюме
              <input type="checkbox" id="checkbox3" />
            </label>
            <label for="checkbox4">
              Резюме
              <input type="checkbox" id="checkbox4" />
            </label>
          </div>
          <div className="card__section">
            <Card />
          </div>
        </div>
        <p className="page" style={{fontSize:'2rem'}}>
          1 2 3 4 5...10...912
        </p>
      </div>
    </div>
  );
};

export default MainPage;
