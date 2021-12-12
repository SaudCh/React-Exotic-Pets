import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row py-2 align-items-center">
      <div className="col-2 text-center">
        <img src={userlogo} className="border" width={80} alt="user" />
      </div>
      <div className="col-10">
        <div
          style={{
            width: "100px",
            height: "300px",
            backgroundColor: "#1f731f",
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
      </div>
    </div>
  );
}
