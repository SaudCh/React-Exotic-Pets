import React from "react";
import { Link } from "react-router-dom";

export default function AddImages() {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row">
          <div
            className="col-11 col-md-6 border rounded bg-light pt-3 pb-4"
            style={{ margin: "0 auto" }}
          >
            <p>Photos</p>
            <hr />
            <form action="" style={{ height: "500px" }}></form>
            <div className="text-center">
              <Link to="/bird/add/photos" className="btn btn-success">
                Add
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
