import React from "react";
import SideBar from "./SideBar";

export default function User() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ margin: "0px auto" }}>
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-9 border"></div>
      </div>
    </div>
  );
}
