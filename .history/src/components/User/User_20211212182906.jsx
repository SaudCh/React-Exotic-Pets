import React from "react";
import SideBar from "./SideBar";
import UserRouter from "../../Routes/User";

export default function User() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ margin: "0px auto" }}>
        <div className="col-11 col-md-2">
          <SideBar />
        </div>
        <div className="col-9 border">
          <UserRouter />
        </div>
      </div>
    </div>
  );
}
