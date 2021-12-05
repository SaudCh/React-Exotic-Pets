import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav>
      <h1 className="logo">pakBirds</h1>
      <div>
        <ul className="Login-section">
          <li>
            <FontAwesomeIcon icon={faUser} /> Login
          </li>
          <li>
            <FontAwesomeIcon icon={faUserPlus} /> Register
          </li>
          <li>
            <button className="btn btn-warning">
              <FontAwesomeIcon icon={faPlusCircle} />
              &nbsp;Buy/Sell Now
            </button>
          </li>
          <li>
            <FontAwesomeIcon icon={faHamburger} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
