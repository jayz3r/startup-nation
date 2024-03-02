import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../scss/VacancyInfo.scss";
import profile from "../assets/avatar.jpg";
import star from "../assets/star-svgrepo-com.png";
import {NavLink} from 'react-router-dom'

let vac = {
  title: "Front-End jr 1 проект",
  salary: "5сом",
  name: "Лионель Месси",
  experience: "1 год опыта",
  resume: "Резюме",
  where: "Можно из дома",
  img: "https://eco-service.kz/wp-content/uploads/electric-2-3-569x600.jpg",
  adress: "г.Бишкек Исанова 41",
};

function VacancyInfo() {
  return (
    <div className="vacancy">
      <div className="vacancy__information">
        <div className="vacancy__short">
          <div className="vacancy__card">
            <div className="card__header">
              <div className="head__title">
                <h1>{vac.title}</h1>
                <span>{vac.salary}</span>
              </div>
            </div>
            <div className="card__details">
              <a href="#">{vac.name}</a>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <p className="work__expirience">{vac.experience}</p>
              </div>
              <div className="work__description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <br />
                <p>Eaque similique quasi rerum nemo expedita consectetur!</p>
              </div>
            </div>
            <div className="card__buttons">
              <button className="work__apply">Откликнуться</button>
              <button className="work__contacts">Показать контакты</button>
            </div>
          </div>
        </div>

        <div className="work__details">
          <div className="vacancy__form">
            <h2>Напишите ваш телефон и с вами свяжутся</h2>
            <form action="">
              <input type="text" placeholder="Напишите ваш телефон" />
              <button>Отправить</button>
            </form>
          </div>
          <div className="vacancy__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus temporibus, vitae quod molestias placeat animi dolore
              voluptatem aut dicta eius quos iure distinctio excepturi
              aspernatur velit veniam, tempora a natus cumque! Autem, ullam
              numquam vitae consequuntur consequatur sunt officiis qui.
            </p>
            <p>
              Esse eveniet deserunt illo dolorum iste ad ipsum illum voluptate,
              debitis consectetur corrupti quidem, dolor iusto a atque adipisci
              id consequatur! Minus iure aut inventore dicta tempora quaerat ex
              esse? Quibusdam fugiat nesciunt repellat tempora id iste quia
              voluptatibus laudantium!
            </p>
            <p>
              Fugit doloremque id aliquam ducimus, aut eveniet recusandae odit
              fuga corporis. Doloribus impedit asperiores vel necessitatibus
              quod accusantium ea vero, et animi saepe sapiente delectus facilis
              quibusdam similique labore! Ducimus laudantium fugit corporis modi
              consequuntur velit dolor tempora adipisci tempore!
            </p>
          </div>
          <div className="work__skills">
            <h2>Ключевые навыки</h2>
            <p className="skill">Крепкие руки</p>
          </div>
          <div className="contact__information">
            <h2>Контактная информация</h2>
            <button>Показать контакты</button>
          </div>
          <div className="applications">
            <h2>Откликнулись</h2>
            <ul>
                <NavLink to={'/profile'}>
              <li>
                  <img src={profile} alt="" />
                  <h3>John Doe</h3>
                  <div className="rating">
                    <h3>4.7</h3>
                    <img className="star" src={star} alt="" />
                  </div>
              </li>
                </NavLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="company__info">
        <img src={vac.img} alt="" />
        <h2>{vac.name}</h2>
        <p>{vac.adress}</p>
      </div>
    </div>
  );
}

export default VacancyInfo;
