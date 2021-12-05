import React from "react";

function Header() {
  return (
    <nav>
      <h1>pakBirds</h1>
      <div>
        <ul>
          <li>Login</li>
          <li>Register</li>
          <li>
            <Button>Buy/Sell Now</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
