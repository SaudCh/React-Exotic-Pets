import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { getBirds } from "../data/birds";

import "./birdDetail.css";
import Safety from "./Safety";
import Slider from "./Slider";
import UserInfo from "./userInfo";
import Description from "./Description";

export default function BirdDetail() {
  const { id, name } = useParams();

  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-xl-7 border rounded bg-light">
          <div className="">
            <p className="bird-heading p-0 my-1">
              {name}{" "}
              <p className="my-1 btn btn-secondary btn-sm p-0 px-1 ms-2">
                For Sale
              </p>
            </p>
          </div>
          <hr className="m-0 my-1" />
          <p className="p-0 m-0 mb-2 text-secondary" style={{ fontSize: 12 }}>
            <FontAwesomeIcon icon={faClock} /> time-{" "}
            <FontAwesomeIcon icon={faFolder} /> Category{" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} /> City
          </p>
          <Slider />
          <Description />
        </div>
        <div className="col-12 mt-4 mt-md-0 col-md-4 col-lg-3 col-xxl-2 ms-md-4">
          <UserInfo />
          <Safety />
          <div></div>
        </div>
      </div>
    </div>
  );
}
