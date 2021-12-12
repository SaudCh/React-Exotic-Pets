import React from "react";
import AdsCard from "../Home/AdsCard";

export default function Result(props) {
  const { birds } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 border rounded">
          <div className="row">
            {birds.map((e) => (
              <AdsCard res={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
