import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div>
      <header>
        <div className="header__title">
          <h1>
            <NavLink to={"/"}>JOBless</NavLink>
          </h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <NavLink to={"/"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>About us</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
      <footer>
        <div className="footersect">
          <h2>JOBless</h2>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
