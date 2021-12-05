import React, { useState } from "react";
import { useParams } from "react-router";
import Map from "./map.jsx";
import "./user.css";

export default function User() {
  const user = [
    {
      name: "Saud ul Hassan",
      email: "saud@gmail.com",
      phone: "+92 302 2321605",
      id: "p1",
      location: {
        lat: 31.419573,
        lng: 74.28868,
      },
    },
    {
      name: "Hamza Jutt",
      email: "hamza@gmail.com",
      phone: "+92 312 3456789",
      id: "p2",
      location: {
        lat: 31.439066,
        lng: 74.286299,
      },
    },
  ];
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
