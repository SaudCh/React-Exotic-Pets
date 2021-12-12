import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Counter() {
  return (
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
      <div className="ms-1">
        <p className="p-0 m-0 fw-bold">0</p>
        <p className="p-0 m-0">Mail</p>
      </div>
    </div>
  );
}
