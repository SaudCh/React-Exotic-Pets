import React, { useState, useEffect } from "react";
import Form from "./form.jsx";
import "./css/form.css";
import Card from "./card.jsx";
import { getStock } from "../data/stock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  //const stock = getStock();
  //console.log(getStock());
  const [location, setlocation] = useState();
  const [wishList, setWishList] = useState(0);
  const [stock, setStock] = useState(getStock());

  const handleAddrTypeChange = (e) => {
    setlocation(e.target.value);
    setlocation(e.target.value);
  };

  useEffect(() => {
    return () => {
      setStock(getStock());
      console.log(location);
      if (location !== "all") {
        setStock((currentStock) => {
          return currentStock.filter((stock) => stock.location == location);
        });
      }
    };
  }, [handleAddrTypeChange]);
  //Location Handler

  //cart handler
  const wishListHandler = () => {
    setWishList((e) => e + 1);
  };
  //
  const removeItem = (itemID) => {
    console.log(itemID);
    setStock((currentStock) => {
      return currentStock.filter((stock) => stock.id !== itemID);
    });
  };
  return (
    <div>
      <div className="addToCartConatiner">
        <button className="btn">
          <FontAwesomeIcon icon={faShoppingCart} />({wishList})
        </button>
      </div>
      <Form location={handleAddrTypeChange} />
      <div className="card-container">
        {stock.map((res) => (
          <Card data={res} wishlistH={wishListHandler} remove={removeItem} />
        ))}
      </div>
    </div>
  );
}
