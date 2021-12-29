import React, { useEffect, useState } from "react";
import { getBirds } from "../data/birds";
import AdsCard from "./AdsCard";

export default function Ads(props) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [birds, setBirds] = getBirds("");

  useEffect(() => {
    const fetchBirds = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/birds/");
        const responseData = await response.json();

        setBirds(responseData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong, please try again.");
      }
    };

    fetchBirds();
  }, []);
  return (
    <div className="p-3 container-fluid">
      <div className="row m-0 pt-3 pb-4 border bg-light">
        <h5 className="pb-1">Ads</h5>
        {birds
          ? birds.map((res) => (
              <AdsCard res={res} addFavHandler={props.addFavHandler} />
            ))
          : null}
      </div>
    </div>
  );
}
