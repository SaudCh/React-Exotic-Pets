import React from "react";
import { getBirds } from "../data/birds";

export default function Ads() {
  const birds = getBirds();
  return (
    <div className="py-3">
      {birds.map((res) => (
        <div>{res.name}</div>
      ))}
    </div>
  );
}
