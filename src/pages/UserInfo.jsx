import React from "react";
import IMG from "../assets/avatar.jpg";

const UserInfo = () => {
    return (
        <main className="page">
            <section className="page__user user-page">
                <div className="user-page__container _container">
                    <div className="user-page__body">
                        <div className="user-page__card">
                            <div className="user-page__image">
                                <img src={IMG} alt="Avatar" />
                            </div>
                            <div className="user-page__info user-info">
                                <h3 className="user-info__name">John Doe</h3>
                                <span className="user-info__profession">
                                    Front-end developer
                                </span>
                                <p className="user-info__text">
                                    The front end is the part that users see and
                                    interact with, includes the User Interface,
                                    the animations, and usually a bunch of logic
                                    to talk to the backend. It is the visual bit
                                    that the user interacts with. This includes
                                    the design, images, colours, buttons, forms,
                                    typography, animations and content. It’s
                                    basically everything that you as a user of
                                    the website can see.
                                </p>
                                <ul className="user-info__list user-list">
                                    <li className="user-list__item">
                                        {/* icon */}
                                        Mountain view, CA
                                    </li>
                                    <li className="user-list__item">
                                        <a href="">mywebsite.me</a>
                                    </li>
                                    <li className="user-list__item">
                                        Mountain view, CA
                                    </li>
                                    <li className="user-list__item">
                                        Mountain view, CA
                                    </li>
                                    <li className="user-list__item">
                                        27 years-old
                                    </li>
                                    <li className="user-list__item">
                                        <a href=""> hi@mywebsite.me</a>
                                    </li>
                                </ul>
                                <div className="user-info__skills user-skills">
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                    <span className="user-skills__item">
                                        HTML5
                                    </span>
                                </div>
                                {/* //======================================================================================================================================================== */}
                                <div className="full-stars">
                                    <div className="rating-group">
                                        <input
                                            name="fst"
                                            value="0"
                                            type="radio"
                                            disabled
                                            checked
                                        />

                                        <label htmlFor="fst-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </label>
                                        <input
                                            name="fst"
                                            id="fst-1"
                                            value="1"
                                            type="radio"
                                        />

                                        <label htmlFor="fst-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </label>
                                        <input
                                            name="fst"
                                            id="fst-2"
                                            value="2"
                                            type="radio"
                                        />

                                        <label htmlFor="fst-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </label>
                                        <input
                                            name="fst"
                                            id="fst-3"
                                            value="3"
                                            type="radio"
                                        />

                                        <label htmlFor="fst-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </label>
                                        <input
                                            name="fst"
                                            id="fst-4"
                                            value="4"
                                            type="radio"
                                        />

                                        <label htmlFor="fst-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                            </svg>
                                        </label>
                                        <input
                                            name="fst"
                                            id="fst-5"
                                            value="5"
                                            type="radio"
                                        />
                                    </div>
                                </div>
                                {/* //======================================================================================================================================================== */}
                            </div>
                        </div>
                        <div className="user-page__footer">
                            <ul className="user-page__icons">
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                                <li className="user-page__items">
                                    {/* icon */}
                                    <a href="">f</a>
                                </li>
                            </ul>
                            <div className="user-page__cv">
                                <button className="user-page__button">
                                    Download cv
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UserInfo;
