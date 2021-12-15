import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./css/AdsCard.css";

export default function AdsCard(props) {
  const { res } = props;
  return (
    <div className="col-6 col-sm-3 col-md-2 m-0 p-1">
      <div class="card m-0 p-0 mx-md-2">
        <p className="sale-text p-0 m-0 px-2 rounded">Required</p>
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${res.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="bird-img"
        ></div>
        <div class="card-body p-2">
          <Link
            to={`/bird/${res.id}/${res.name}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h5 class="bird-name">{res.name.substring(0, 30)}...</h5>
          </Link>
          <p class="card-tex text-secondary mb-0 pb-0 bird-detail">
            <FontAwesomeIcon icon={faClock} />
            &#160;
            {res.time}
            &#160;&#160;
            <FontAwesomeIcon icon={faFolder} />
            &#160;
            {res.category}
            &#160;&#160;
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &#160;
            {res.location}
          </p>
          <p class="card-text text-end p-0 my-1">{res.price} Rs</p>
          <Link
            href="#"
            class="btn btn-secondary btn-sm "
            style={{ padding: "2px 10px" }}
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
