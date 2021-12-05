import React from "react";

export default function Bird() {
  const id = useParams().id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
