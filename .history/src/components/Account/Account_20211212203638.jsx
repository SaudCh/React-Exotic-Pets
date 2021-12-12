import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";
import Counter from "./Counter";

export default function Account() {
  return (
    <div className="border bg-light rounded row py-2 align-items-center">
      <div className="col-7">
        <img src={userlogo} className="border" width={80} alt="user" />
      </div>
      <div className="col-5">
        <div className="d-flex">
          <Counter icon={faEnvelope} counter="0" text="Mail" />
          <Counter icon={faEye} counter="0" text="Views" />
          <Counter icon={faEnvelope} counter="0" text="Mail" />
          <Counter icon={faEnvelope} counter="0" text="Mail" />
        </div>
      </div>
    </div>
  );
}
