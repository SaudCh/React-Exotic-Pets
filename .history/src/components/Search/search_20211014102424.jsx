import React from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { stock } from "../data/stock";
export default function Search() {
  return (
    <div>
      <Form />
      {stock.map((e) => {})}
    </div>
  );
}
