import React from "react";
import { useParams } from "react-router-dom";

export default function BirdDetail() {
  const { id, name } = useParams();
  return (
    <div>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
