import React, { useState } from "react";
import { useParams } from "react-router";
import Map from "./map.jsx";
import "./user.css";
import { getUsers } from "../data/users.js";

export default function User() {
  const users = getUsers();
  const userId = useParams().userId;
  const user = users.filter((user) => user.id === userId);

  return (
    <div className="mt-4">
      {user.map((res) => (
        <div>
          <div className="person-info-container">
            <figure className="avatar-container bg-secondary"></figure>
            <h5>{res.name}</h5>
            <h6>{res.email}</h6>
            <h6>{res.phone}</h6>
            <h6>{}</h6>
          </div>
          <hr />
          <div className="map">
            <h2 className="text-secondary">Birds</h2>
          </div>
          <hr />
          <div className="map">
            <h2 className="text-secondary">Location</h2>
            <Map center={res.location} zoom={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
