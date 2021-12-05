import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand">ExoticBirds</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link">
                <FontAwesomeIcon icon={faHome} />
                &#160;Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link">
                <FontAwesomeIcon icon={faPhone} />
                &#160;Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link">
                <FontAwesomeIcon icon={faUser} />
                &#160;Log In
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" tabindex="-1" aria-disabled="true">
                <FontAwesomeIcon icon={faUserPlus} />
                &#160;Register
              </Link>
            </li>
          </ul>

          <button class="btn btn-warning" type="submit">
            <FontAwesomeIcon icon={faPlusCircle} />
            &#160;<strong>Buy/Sell</strong>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
