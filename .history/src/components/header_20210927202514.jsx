import React from "react";
import "./css/header.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function Header() {
  return (
    <nav>
      <h1 className="logo">pakBirds</h1>
      <div>
        <ul className="Login-section">
          <li>Login</li>
          <li>Register</li>
          <li>
            <button>Buy/Sell Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
