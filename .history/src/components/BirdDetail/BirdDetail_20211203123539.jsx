import React from "react";
import { useParams } from "react-router-dom";

export default function BirdDetail() {
  const { id, name } = useParams();
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-7 border rounded bg-light">{name}</div>
        <div className="col-2 border rounded ms-4">Posted By</div>
      </div>
    </div>
  );
}
