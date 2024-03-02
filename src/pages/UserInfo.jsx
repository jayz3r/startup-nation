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
