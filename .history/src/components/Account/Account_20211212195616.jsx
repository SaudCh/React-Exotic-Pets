import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row">
      <div className="col-2 text-center">
        <img src={userlogo} className="border" width={80} alt="user" />
      </div>
    </div>
  );
}
