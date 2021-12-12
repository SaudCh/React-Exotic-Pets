import React from "react";

export default function AddBird() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border rounded bg-light">
          <p>Post Free Ads</p>
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
}
