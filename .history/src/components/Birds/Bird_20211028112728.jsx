import React from "react";
import { useParams } from "react-router";

export default function Bird() {
  const name = useParams().name;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
