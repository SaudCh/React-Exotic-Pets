import React from "react";
import Advance from "./Advance";
import Basic from "./Basic";
import Security from "./Security";

export default function Account() {
  return (
    <div>
      <Basic />

      <Advance />

      <Security />
    </div>
  );
}
