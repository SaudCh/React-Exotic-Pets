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
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="name" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
