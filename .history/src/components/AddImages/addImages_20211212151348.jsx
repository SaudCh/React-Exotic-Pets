import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddImages() {
  const [images, setImages] = useState([]);
  const imageHandler = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((pState) => [...pState, newImage]);
    }
    //console.log(e.target.files[0]);
    console.log(images);
  };
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
            <form action="">
              <div class="mb-3">
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={imageHandler}
                />
                {images.map((e) => (
                  <div>{e.name}</div>
                ))}
              </div>
            </form>
            <div className="text-center">
              <Link to="/bird/add/photos" className="btn btn-success">
                Finish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
