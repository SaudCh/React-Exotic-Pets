import React, { useState } from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { getStock } from "../data/stock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
    console.clear();
    console.log("click");
    setWishList((e) => e + 1);
  };
  return (
    <div>
      <button className="btn" style={{ alignSelf: "left" }}>
        <FontAwesomeIcon icon={faShoppingCart} />({wishList})
      </button>
      <Form location={handleAddrTypeChange} />
      <div className="card-container">
        {stock.map((res) => (
          <Card data={res} wishlistH={wishListHandler} />
        ))}
      </div>
    </div>
  );
}
