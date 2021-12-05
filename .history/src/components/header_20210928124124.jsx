import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const toggleMenu = () => {
    const menu = document.querySelector(".Login-section");
    menu.classList.toggle("toggle-menu");
  };
  return (
    <nav>
      <h1 className="logo">pakBirds</h1>
      <div>
        <ul className="Login-section">
          <li>
            <button className="btn">
              <FontAwesomeIcon icon={faUser} /> Login
            </button>
          </li>
          <li>
            <button className="btn">
              <FontAwesomeIcon icon={faUserPlus} /> Register
            </button>
          </li>
          <li>
            <button className="btn btn-warning">
              <FontAwesomeIcon icon={faPlusCircle} />
              &nbsp;Buy/Sell Now
            </button>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => toggleMenu()}
          className="hamburger"
          icon={faBars}
        />
      </div>
    </nav>
  );
}

export default Header;
