import React, { useEffect, useState } from "react";
import LoadingSpinner from "../Shared/LoadingSpinner";
import AdsCard from "./AdsCard";

export default function Ads(props) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [birds, setBirds] = useState("");

  useEffect(() => {
    const fetchBirds = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/birds/");
        const responseData = await response.json();

        setBirds(responseData.birds);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong, please try again.");
      }
    };

    fetchBirds();
  }, []);

  const Error = () => {
    return (
      <ul
        className="alert alert-danger m-2"
        style={{ listStyle: "none" }}
        role="alert"
      >
        {error ? <li>{error}</li> : null}
      </ul>
    );
  };

  return (
    <div className="p-3 container-fluid">
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="row m-0 pt-3 pb-4 border bg-light">
        <h5 className="pb-1">Ads</h5>
        {birds ? (
          birds.map((res) => (
            <AdsCard res={res} addFavHandler={props.addFavHandler} />
          ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}
