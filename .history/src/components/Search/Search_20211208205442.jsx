import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { getBirds } from "../data/birds";

export default function Search() {
  const [birds, setBirds] = useState(getBirds());
  const [category, setCategory] = useState("");

  const categoryHandler = () => {
    setCategory();
  };

  return (
    <div>
      <Form category={category} />
      <Result birds={birds} />
    </div>
  );
}
