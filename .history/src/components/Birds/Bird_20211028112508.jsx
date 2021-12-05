import React from "react";

const id = useParams().id;

export default function Bird() {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
