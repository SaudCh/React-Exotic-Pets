import React, { useRef } from "react";
import Joi from "joi-browser";

export default function AddBird() {
  const birdNameRef = useRef();
  const birdTypeRef = useRef();

  const schema = {
    applicantName: Joi.string().required().label("Applicant Name"),
    university: Joi.string().required().label("University Name"),
  };

  const validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    result.error.details.map((result) => {
      errors[result.path] = result.message;
    });

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(birdNameRef.current.value);
    console.log(birdTypeRef.current.value);
  };
  const handleChange = (e) => {
    //e.preventDefault();
    console.log(e.currentTarget.value);
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
              ref={birdNameRef}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={birdTypeRef}
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
