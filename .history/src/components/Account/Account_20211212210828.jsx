import {
  faEnvelope,
  faEye,
  faThLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import userlogo from "../img/user.png";
import Counter from "./Counter";

export default function Account() {
  return (
    <div className="border bg-light rounded row py-2 align-items-center">
      <div className="col-7">
        <div>
          <img src={userlogo} className="border" width={60} alt="user" />
          <p>Saud ul Hassan</p>
        </div>
      </div>
      <div className="col-5">
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
