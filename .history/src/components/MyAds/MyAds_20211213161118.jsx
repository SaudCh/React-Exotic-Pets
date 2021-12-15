import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faEyeSlash,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function MyAds() {
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faClone} /> My Ads
      </p>
      <hr />
      <table class="table">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="border">@mdo</td>
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
        </tbody>
      </table>
    </div>
  );
}
