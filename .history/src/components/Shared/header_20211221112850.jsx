import React, { useContext } from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";
import { AuthContext } from "../context/auth-context";

function Header() {
  const auth = useContext(AuthContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img src={logo} width="200" alt="" />
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {auth.isLoggedIn ? (
              <>
                <li class="nav-item nav-cus-link">
                  <button onClick={() => auth.logout()} class="nav-link btn">
                    <FontAwesomeIcon icon={faUser} />
                    &#160;Log Out
                  </button>
                </li>
                <li class="nav-item nav-cus-link">
                  <Link to="/login/" class="nav-link">
                    <FontAwesomeIcon icon={faUser} />
                    &#160;My Account
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item nav-cus-link">
                  <Link to="/login/" class="nav-link">
                    <FontAwesomeIcon icon={faUser} />
                    &#160;Log In
                  </Link>
                </li>

                <li class="nav-item nav-cus-link">
                  <Link
                    to="/register/"
                    class="nav-link"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                    &#160;Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <Link to="/bird/add" class="btn btn-warning me-5" type="submit">
            <FontAwesomeIcon icon={faPlusCircle} />
            &#160;<strong>Buy/Sell Now</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
