import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function AdsCard(props) {
  const { res } = props;
  return (
    <div class="card col-5 col-md-2 mx-2">
      <img
        src={res.img}
        class="card-img-top"
        style={{ height: "200px", width: "auto" }}
        alt="..."
      />
      <div class="card-body">
        <h5 style={{ height: "45px", fontSize: "30" }} class="card-title">
          {res.name.substring(0, 30)}...
        </h5>
        <p class="card-text mb-0 pb-0">
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
        <p class="card-text mt-0 pt-0">{res.price} Rs</p>

        <Link href="#" class="btn btn-secondary btn-sm align-self-end">
          Save
        </Link>
      </div>
    </div>
  );
}
