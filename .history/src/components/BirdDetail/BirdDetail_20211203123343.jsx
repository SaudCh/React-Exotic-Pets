import React from "react";
import { useParams } from "react-router-dom";

export default function BirdDetail() {
  const { id, name } = useParams();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-7 border rounded">{name}</div>
        <div className="col-4">Posted By</div>
      </div>
    </div>
  );
}
