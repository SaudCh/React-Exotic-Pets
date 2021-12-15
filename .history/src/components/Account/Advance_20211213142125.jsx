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

      <div className="border rounded bg-light p-0 mt-2">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Account Details</p>
        </div>
        <div className="bg-white">
          <form action="">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Gender
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
