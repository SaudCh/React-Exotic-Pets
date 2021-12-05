import React from "react";
import { useParams } from "react-router-dom";
import "./birdDetail.css";
import Slider from "./Slider";
export default function BirdDetail() {
  const { id, name } = useParams();

  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-7 border rounded bg-light">
          <div className="d-flex align-items-center">
            <p className="bird-heading p-0 my-1">{name}</p>
            <p className="my-1 btn btn-secondary btn-sm p-0 px-1 ms-2">
              For Sale
            </p>
          </div>
          <hr className="m-0 my-1" />
          <Slider />
        </div>
        <div className="col-2 ms-4">
          <div className="border rounded p-2">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <p>Posted By</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
