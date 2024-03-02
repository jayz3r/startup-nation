import React from "react";
import "./Card.scss";
import info from "./CardInfo.json";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Card() {
  let cardArr = info;
  return (
    <div>
      {cardArr.map((eachCard, index) => (
          <div key={index} className="card">
            <div className="card__header">
              <div className="head__title">
                <h3>{eachCard.title}</h3>
                <span>{eachCard.salary}</span>
              </div>
              <img src={eachCard.img} alt="" className="logo" />
            </div>
            <div className="card__details">
              <a href="#">{eachCard.name}</a>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <p className="work__expirience">{eachCard.experience}</p>
              </div>

              <div className="work__tags">
                <span>{eachCard.resume}</span>
                <span>{eachCard.where}</span>
              </div>
            </div>
            <div className="card__buttons">
            <NavLink to={'/Vacancy'}>
              <button className="work__apply"> Откликнуться 
              </button>
              </NavLink>  
            </div>
          </div>
      ))}
    </div>
  );
}

export default Card;
