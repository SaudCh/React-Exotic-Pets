import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row py-2 align-items-center">
      <div className="col-7">
        <img src={userlogo} className="border" width={80} alt="user" />
      </div>
      <div className="col-5">
        <div className="d-flex">
          <div
            className="text-white d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: 25,
              backgroundColor: "#1f731f",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div
            className="text-white d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: 25,
              backgroundColor: "#1f731f",
            }}
          >
            <FontAwesomeIcon icon={faEye} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}
