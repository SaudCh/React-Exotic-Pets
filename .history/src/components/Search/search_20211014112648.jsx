import React, { useState } from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { getStock } from "../data/stock";
export default function Search() {
  const stock = getStock();
  //console.log(getStock());
  const [location, setlocation] = useState();
  const [wishList, setWishList] = useState(0);

  const handleAddrTypeChange = (e) => {
    //console.clear();
    //console.log(e.target.value);
    setlocation(e.target.value);
  };
  const wishListHandler = () => {
    console.log("click");
    setWishList((e) => e + 1);
  };
  return (
    <div>
      <button className="btn btn-danger">Wish List({wishList})</button>
      <Form location={handleAddrTypeChange} />
      <div className="card-container">
        {stock.map((res) => (
          <Card data={res} wishlistH={wishListHandler} />
        ))}
      </div>
    </div>
  );
}
