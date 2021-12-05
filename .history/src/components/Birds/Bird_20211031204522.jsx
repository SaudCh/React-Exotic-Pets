import React from "react";
import { useParams } from "react-router";

export default function Bird() {
  const id = useParams().id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
