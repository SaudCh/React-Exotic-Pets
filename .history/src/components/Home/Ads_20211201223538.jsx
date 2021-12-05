import React from "react";
import { getBirds } from "../data/birds";

export default function Ads() {
  const birds = getBirds();
  return (
    <div className="p-3 row">
      {birds.map((res) => (
        <div>{res.name}</div>
      ))}
    </div>
  );
}
