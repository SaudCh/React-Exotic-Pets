import React from "react";
import { useParams } from "react-router-dom";
import "./birdDetail.css";
import Safety from "./Safety";
import Slider from "./Slider";
import UserInfo from "./userInfo";

export default function BirdDetail() {
  const { name } = useParams();

  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 border rounded bg-light">
          <div className="d-flex align-items-center">
            <p className="bird-heading p-0 my-1">{name}</p>
            <p className="my-1 btn btn-secondary btn-sm p-0 px-1 ms-2">
              For Sale
            </p>
          </div>
          <hr className="m-0 my-1" />

          <Slider />
        </div>
        <div className="col-10 col-md-2 ms-md-4">
          <UserInfo />
          <Safety />
        </div>
      </div>
    </div>
  );
}
