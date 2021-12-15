import React from "react";
import SideBar from "./SideBar";
import UserRouter from "../../Routes/User";

export default function User(props) {
  return (
    <div className="container-fluid my-4">
      <div
        className="row justify-content-center"
        style={{ margin: "0px auto" }}
      >
        <div className="col-11 col-md-2">
          <SideBar />
        </div>
        <div className="col-11 col-md-8">
          <UserRouter fav={props.fav} />
        </div>
      </div>
    </div>
  );
}
