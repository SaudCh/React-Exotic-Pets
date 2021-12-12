import React from "react";

export default function AddBird() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border rounded bg-light">
          <p>Post Free Ads</p>
          <form>
            <div className="form-group row">
              <label htmlFor="category" className="col-sm-2 col-form-label">
                Category
              </label>
              <div className="col-sm-10">
                <select className="form-control" id="category">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="sub-category" className="col-sm-2 col-form-label">
                Sub Category
              </label>
              <div className="col-sm-10">
                <select className="form-control" id="sub-category">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
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
