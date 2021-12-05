import React from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { getStock } from "../data/stock";
export default function Search() {
  const stock = getStock();
  console.log(getStock());
  return (
    <div>
      <Form />
      {stock.map((res) => (
        <Card />
      ))}
    </div>
  );
}
