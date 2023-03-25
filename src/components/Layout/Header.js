import React, { useState } from "react";
import "../../styles/headerStyle.css";
import { MdFastfood } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showDiv, setshowDiv] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <MdFastfood className="golden-red foodie-logo mx-1" />
          <a className="navbar-brand golden-red fw-bold" href="#">
            Foodies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setshowDiv(!showDiv)}
          >
            <span className="golden-red">
              <AiOutlineBars />
            </span>
          </button>
          <div className={`collapse navbar-collapse ${showDiv ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={"NavLink mx-2 p-2"}
                  activeClassName="active"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"NavLink mx-2 p-2"} to={"/menu"}>
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"NavLink mx-2 p-2"} to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"NavLink mx-2 p-2"} to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
