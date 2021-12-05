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
    <div className="col-6 col-md-2 m-0 p-1">
      <div class="card m-0 p-0 mx-md-2">
        <img
          src={res.img}
          class="card-img-top"
          style={{ height: "200px", width: "auto" }}
          alt="..."
        />
        <div class="card-body">
          <h5 class="bird-name">{res.name.substring(0, 30)}...</h5>
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
          <p class="card-text mt-0 pt-0 mb-1">{res.price} Rs</p>

          <Link href="#" class="btn btn-secondary btn-sm align-self-end">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
