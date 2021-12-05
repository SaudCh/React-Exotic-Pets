import React from "react";

export default function AddBird() {
  return (
    <div className="my-5">
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Bird Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Type
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div style={{ textAlign: "center" }} className="border">
            <button type="submit" className="btn btn-danger">
              Edit
            </button>
            <button type="submit" className="btn btn-primary ms-2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
