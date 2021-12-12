import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { getBirds } from "../data/birds";

export default function Search() {
  const [birds, setBirds] = useState(getBirds());
  const [category, setCategory] = useState("");

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setBirds(getBirds());
    if (e.target.value !== "0") {
      setBirds((b) => {
        return b.filter((bird) => bird.category === e.target.value);
      });
    }
  };

  return (
    <div>
      <Form category={category} categoryHandler={categoryHandler} />
      <Result birds={birds} />
    </div>
  );
}
