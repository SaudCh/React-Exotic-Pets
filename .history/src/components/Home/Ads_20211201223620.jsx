import React from "react";
import { getBirds } from "../data/birds";

export default function Ads() {
  const birds = getBirds();
  return (
    <div className="p-3 container-fluid">
      <div className="row">
        {birds.map((res) => (
          <div className="col-3">{res.name}</div>
        ))}
      </div>
    </div>
  );
}
