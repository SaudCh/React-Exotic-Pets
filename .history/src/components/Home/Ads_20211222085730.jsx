import React, { useEffect, useState } from "react";
import { getBirds } from "../data/birds";
import AdsCard from "./AdsCard";

export default function Ads(props) {
  const birds = getBirds();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch("http://localhost:5000/birds/");
        const responseData = await response.json();

        //setError("");
        //setIsLoading(false);
      } catch (err) {
        //setIsLoading(false);
        //setError(err.message || "Something went wrong, please try again.");
      }
    };
  }, []);
  return (
    <div className="p-3 container-fluid">
      <div className="row m-0 pt-3 pb-4 border bg-light">
        <h5 className="pb-1">Ads</h5>
        {birds.map((res) => (
          <AdsCard res={res} addFavHandler={props.addFavHandler} />
        ))}
      </div>
    </div>
  );
}
