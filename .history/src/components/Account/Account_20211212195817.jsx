import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row py-2">
      <div className="col-2 text-center">
        <img src={userlogo} className="border" width={80} alt="user" />
      </div>
      <div className="col-10">
        <FontAwesomeIcon icon={faEnvolpe} />
      </div>
    </div>
  );
}
