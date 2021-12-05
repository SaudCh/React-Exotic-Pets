import React from "react";
import "./css/header.css";

function Header() {
  return (
    <nav className="bg-light">
      <h1 className="logo">pakBirds</h1>
      <div>
        <ul className="Login-section">
          <li>Login</li>
          <li>Register</li>
          <li>
            <button className="btn btn-primary">Buy/Sell Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
