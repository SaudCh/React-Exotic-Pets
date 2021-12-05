import React from "react";
import { useParams } from "react-router-dom";
import "./birdDetail.css";
import Slider from "./Slider";
import userImg from "../img/user.png";

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
          <div className="border rounded p-2">
            <div className="row">
              <div className="col-3 pt-1">
                <img src={userImg} style={{ width: "50px" }} alt="" />
              </div>
              <div className="col-9">
                <p className="p-0 m-0">Posted By</p>
                <p className="user-name">Saud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
