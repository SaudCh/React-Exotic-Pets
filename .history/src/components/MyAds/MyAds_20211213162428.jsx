import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faEyeSlash,
  faTrash,
  faEdit,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getBirds } from "../data/birds";

export default function MyAds() {
  const birds = getBirds();
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faClone} /> My Ads
      </p>
      <hr />
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Ads Detail</th>
            <th scope="col">Price</th>
            <th scope="col">option</th>
          </tr>
        </thead>
        <tbody>
          {birds.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>
                <img src={e.img} width="100" alt="" />
              </td>
              <td>
                <p style={{ color: "#228b22" }}>{e.name}</p>
                <p className="text-secondary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {e.location}
                </p>
              </td>
              <td>{e.price}</td>
              <td>
                <button className="btn btn-success btn-sm d-block mb-1">
                  <i style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </i>
                </button>
                <button className="btn btn-warning btn-sm d-block mb-1">
                  <i style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon icon={faEyeSlash} /> Offline
                  </i>
                </button>
                <button className="btn btn-danger btn-sm d-block mb-1">
                  <i style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
