import React from "react";
import { Link } from "react-router-dom";

export default function AdsCard(props) {
  const { res } = props;
  return (
    <div class="card col-3">
      <img
        src={res.img}
        class="card-img-top"
        style={{ height: "200px", width: "auto" }}
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{res.name}</h5>
        <p class="card-text">{res.time}</p>
        <Link href="#" class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
