import React from "react";
import { getBirds } from "../data/birds";
import AdsCard from "./AdsCard";

export default function Ads() {
  const birds = getBirds();
  return (
    <div className="p-3 container-fluid">
      <h3>Ads</h3>
      <div className="row m-3 py-4 border bg-light">
        {birds.map((res) => (
          <AdsCard res={res} />
        ))}
      </div>
    </div>
  );
}
