import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { getBirds } from "../data/birds";

export default function Search() {
  //const [birds, setBirds] = useState(getBirds());
  const [category, setCategory] = useState("");
  const [result, setResult] = useState(getBirds());

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setResult(getBirds());
    if (e.target.value !== "0") {
      setResult((b) => {
        return b.find((bird) => bird.category === e.target.value);
      });
    }
    console.log(result);
  };

  return (
    <div>
      <Form category={category} categoryHandler={categoryHandler} />
      <Result birds={result} />
    </div>
  );
}
