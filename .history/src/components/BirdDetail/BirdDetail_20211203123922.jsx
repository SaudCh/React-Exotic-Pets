import React from "react";
import { useParams } from "react-router-dom";

export default function BirdDetail() {
  const { id, name } = useParams();
  return (
    <div className="container-fluid my-4">
      <div className="row align-items-center justify-content-center">
        <div className="col-7 border rounded bg-light">
          {name}
          <hr className="m-0 my-1" />
        </div>
        <div className="col-2 border rounded ms-4">Posted By</div>
      </div>
    </div>
  );
}
