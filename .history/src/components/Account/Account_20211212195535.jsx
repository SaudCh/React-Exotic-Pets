import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row">
      <div className="col-2">
        <img src={userlogo} width={80} alt="user" />
      </div>
    </div>
  );
}
