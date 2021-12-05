import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import userImg from "../img/user.png";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./userInfo.css";

export default function userInfo() {
  return (
    <div className="border rounded p-2">
      <div className="row">
        <div className="col-3 pt-1">
          <img src={userImg} style={{ width: "50px" }} alt="" />
        </div>
        <div className="col-9">
          <p className="p-0 m-0">Posted By</p>
          <p className="user-name p-0 m-0">Saud</p>
        </div>
      </div>
      <hr className="m-0 my-1" />
      <div className="d-flex justify-content-between  align-item-center">
        <p className="p-0 m-0 text-secondary user-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> &#160; Location
        </p>
        <p className="p-0 m-0 user-location text-success">Lahore</p>
      </div>
      <div className="d-flex justify-content-between mt-1 align-item-center">
        <p className="p-0 m-0 text-secondary user-joined">
          <FontAwesomeIcon icon={faUser} /> &#160; Joined
        </p>
        <p className="p-0 m-0 user-location text-secondary">3 days Ago</p>
      </div>
      <hr className="m-0 my-1" />
      <div className="text-center">
        <button className="btn btn-sm border my-1" style={{ width: 200 }}>
          <FontAwesomeIcon icon={faEnvelope} /> Send a Message
        </button>
        <button className="btn btn-sm btn-success my-1" style={{ width: 200 }}>
          <FontAwesomeIcon icon={faPhoneAlt} /> +92 302 2321605
        </button>
      </div>
    </div>
  );
}
