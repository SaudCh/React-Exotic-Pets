import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Counter(props) {
  return (
    <div className="d-flex">
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: 20,
          backgroundColor: "#1f731f",
        }}
      >
        <FontAwesomeIcon icon={props.icon} style={{ fontSize: "20px" }} />
      </div>
      <div className="m-0 p-0 ms-1 me-3">
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
