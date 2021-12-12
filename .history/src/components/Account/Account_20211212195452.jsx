import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded">
      <div>
        <img src={userlogo} alt="user" />
      </div>
    </div>
  );
}
