import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { getBirds } from "../data/birds";

export default function Search() {
  const [birds, setBirds] = useState(getBirds());
  const [category, setCategory] = useState("");

  const categoryHandler = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    if (e.target.value !== "0") {
      setBirds((b) => {
        return b.filter((bird) => bird.id == e.target.value);
      });
    } else {
      setBirds(getBirds());
    }
  };

  return (
    <div>
      {category}
      <Form category={category} categoryHandler={categoryHandler} />
      <Result birds={birds} />
    </div>
  );
}
