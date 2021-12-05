import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="#">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
              Link
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="#">
                Action
              </Link>
              <Link class="dropdown-item" to="#">
                Another action
              </Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to="#">
                Something else here
              </Link>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled" to="#">
              Disabled
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
