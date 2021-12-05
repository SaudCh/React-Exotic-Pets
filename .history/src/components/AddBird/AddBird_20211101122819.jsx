import React, { useRef } from "react";

export default function AddBird() {
  const birdNameRef = useRef();
  const birdTypeRef = useRef();
  const handleSubmit = (e) => {
    e.preventDeafult();
    console.log(birdNameRef.current.value);
    console.log(birdTypeRef.current.value);
  };
  return (
    <div className="my-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="birdName" className="form-label">
              Bird Name
            </label>
            <input
              type="text"
              className="form-control"
              id="birdName"
              //ref={birdNameRef}
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
              //ref={birdTypeRef}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-danger">Edit</button>
            <button className="btn btn-primary ms-2">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
