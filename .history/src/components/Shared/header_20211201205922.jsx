import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#">
          Navbar
        </Link>
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
        <div
          class="collapse navbar-collapse border"
          id="navbarSupportedContent"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" href="#">
                <FontAwesomeIcon icon={faUser} />
                Log In
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                Register
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
