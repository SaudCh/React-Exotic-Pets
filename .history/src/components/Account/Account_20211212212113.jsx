import React from "react";
import Advance from "./Advance";
import Basic from "./Basic";

export default function Account() {
  return (
    <div className="container-fluid">
      <Basic />
      <Advance />
    </div>
  );
}
