import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMapMarkerAlt,
  faClock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
//import { getBirds } from "../data/birds";

export default function FavAds(props) {
  //const birds = getBirds();
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faHeart} /> Fav Ads
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
          {props.fav.map((e) => (
            <tr>
              <td>1</td>
              <td>
                <img src={e.img} width="100" alt="" />
              </td>
              <td>
                <p className="p-0 m-0" style={{ color: "#228b22" }}>
                  {e.name}
                </p>
                <p className="text-secondary p-0 m-0" style={{ fontSize: 13 }}>
                  <FontAwesomeIcon icon={faClock} /> -
                </p>
                <p className="text-secondary p-0 m-0" style={{ fontSize: 13 }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> -
                </p>
              </td>
              <td>-</td>
              <td>
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
