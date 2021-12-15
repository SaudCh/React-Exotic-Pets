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
    // setResult(getBirds());
    // if (e.target.value !== "0") {
    //   setResult((b) => {
    //     return b.filter((bird) => bird.category === e.target.value);
    //   });
    // }
    const bird = result.find((p) => {
      return p.category === e.target.value;
    });
    console.log(bird);
    //setResult(bird);
  };

  return (
    <div>
      <Form category={category} categoryHandler={categoryHandler} />
      <Result birds={result} />
    </div>
  );
}
