import React from "react";

import userlogo from "../img/user.png";

export default function Account() {
  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
      <p className="h4">Hello Saud ul Hassan!</p>

      <div className="border rounded bg-light p-0">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Photo or Avatar</p>
        </div>
        <div
          style={{ height: "260px" }}
          className="bg-white d-flex justify-content-center align-items-center"
        >
          <img src={userlogo} width={160} className="border rounded" alt="" />
        </div>
      </div>

      <div className="border rounded bg-light p-0">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Account Details</p>
        </div>
      </div>
    </div>
  );
}
