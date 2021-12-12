import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { getBirds } from "../data/birds";

export default function Search() {
  const [birds, setBirds] = useState(getBirds());
  return (
    <div>
      <Form />
      <Result birds={birds} />
    </div>
  );
}
