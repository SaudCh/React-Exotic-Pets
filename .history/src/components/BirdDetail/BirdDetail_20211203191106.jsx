import React from "react";
import { useParams } from "react-router-dom";
import "./birdDetail.css";
export default function BirdDetail() {
  const { id, name } = useParams();

  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-7 border rounded bg-light">
          <div className="d-flex align-items-center">
            <p className="bird-heading p-0 my-1">{name}</p>
            <p className="my-1 btn btn-secondary btn-sm p-0">For Sale</p>
          </div>
          <hr className="m-0 my-1" />
        </div>
        <div className="col-2 border rounded ms-4">Posted By</div>
      </div>
    </div>
  );
}
