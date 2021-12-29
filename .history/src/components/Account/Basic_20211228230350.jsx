import {
  faEnvelope,
  faEye,
  faThLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";
import Counter from "./Counter";

export default function Account(props) {
  const { user } = props;
  return (
    <div className="border bg-light rounded row py-3 align-items-center">
      <div className="col-6">
        <img src={userlogo} className="border" width={60} alt="user" />
        <p className="d-inline ms-3 h3" style={{ color: "#1f731f" }}>
          {user.name}
        </p>
      </div>
      <div className="col-12 col-md-5">
        <div className="d-flex">
          <Counter icon={faEnvelope} counter="0" text="mail" />
          <Counter icon={faEye} counter="0" text="visits" />
          <Counter icon={faThLarge} counter="0" text="ads" />
          <Counter icon={faUser} counter="0" text="favourite" />
        </div>
      </div>
    </div>
  );
}
