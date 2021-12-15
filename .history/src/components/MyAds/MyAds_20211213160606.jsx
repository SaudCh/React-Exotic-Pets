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
            <td>@mdo</td>
            <td>
              <button className="btn btn-success btn-sm">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button className="btn btn-warning btn-sm">
                <FontAwesomeIcon icon={faEyeSlash} /> Offline
              </button>
              <button className="btn btn-danger btn-sm">
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
