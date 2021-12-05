import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Description() {
  return (
    <div className="mt-3">
      <div className="p-0 m-0 me-1 border-bottom ">
        <p
          className="bg-white mx-0 mt-0 p-0 px-1 border rounded-top border-bottom-0"
          style={{ marginBottom: "-1px", width: 80 }}
        >
          Ad Detail
        </p>
      </div>
      <div className="bg-white border border-top-0 rounded-bottom rounded-end">
        <div className="row pt-2 mx-1">
          <div className="col-12 col-md-6">
            <p style={{ fontSize: "20px" }}>
              <p className="d-inline fw-bold">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:{" "}
              </p>
            </p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p style={{ fontSize: "20px" }}>
              <p className="d-inline fw-bold">Price</p>{" "}
              <p className="btn btn-sm btn-success m-0 mb-1 p-0 px-1">
                Negotiable
              </p>
            </p>
          </div>
        </div>
        <hr className="m-0 p-0 mb-1 mx-1" />
        <p className="bg-light border rounded mx-1 mt-2 ">Description</p>
        <div className="d-xl-flex text-center justify-content-between mx-0 my-2 mx-md-5">
          <div className="">
            <button className="btn btn-sm border my-1" style={{ width: 200 }}>
              Send a Message
            </button>
          </div>
          <div className="">
            <button
              className="btn btn-sm btn-success my-1"
              style={{ width: 200 }}
            >
              +92 302 2321605
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
