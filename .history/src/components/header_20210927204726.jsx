import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav>
      <h1 className="logo">pakBirds</h1>
      <div>
        <ul className="Login-section">
          <li>Login</li>
          <li>Register</li>
          <li>
            <button className="btn btn-warning">Buy/Sell Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
