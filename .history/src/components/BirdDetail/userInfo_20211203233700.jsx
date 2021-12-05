import React from "react";
import userImg from "../img/user.png";

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
      <div>
        <p className="p-0 m-0">Location</p>
      </div>
      <div>
        <p className="p-0 m-0">Joined</p>
      </div>
      <hr className="m-0" />
    </div>
  );
}
