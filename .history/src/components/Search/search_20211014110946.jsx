import React, { useState } from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { getStock } from "../data/stock";
export default function Search() {
  const stock = getStock();
  console.log(getStock());
  const [location, setlocation] = useState(initialState);
  return (
    <div>
      <Form />
      <div className="card-container">
        {stock.map((res) => (
          <Card data={res} />
        ))}
      </div>
    </div>
  );
}
