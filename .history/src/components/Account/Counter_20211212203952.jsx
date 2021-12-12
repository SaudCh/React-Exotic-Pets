import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Counter(props) {
  return (
    <div className="d-flex">
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: 15,
          backgroundColor: "#1f731f",
        }}
      >
        <FontAwesomeIcon icon={props.icon} style={{ fontSize: "20px" }} />
      </div>
      <div className="ms-1">
        <p className="p-0 m-0 fw-bold" style={{ color: "#1f731f" }}>
          {props.counter}
        </p>
        <p className="p-0 m-0" style={{ color: "#1f731f" }}>
          {props.text}
        </p>
      </div>
    </div>
  );
}
