import React from "react";
import { useParams } from "react-router-dom";

export default function BirdDetail() {
  const { id, name } = useParams();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-8"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
