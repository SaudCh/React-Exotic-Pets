import React, { useState, useEffect, useContext } from "react";
import Advance from "./Advance";
import Basic from "./Basic";
import { AuthContext } from "../context/auth-context";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function Account(props) {
  const auth = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchBirds = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/user/${auth.userId}`
        );
        const responseData = await response.json();
        //console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setUser(responseData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong, please try again.");
      }
    };

    fetchBirds();
  }, [auth.userId]);
  return (
    <div>
      {isLoading && <LoadingSpinner asOverlay />}
      {error ? (
        <ul
          className="alert alert-danger"
          style={{ listStyle: "none" }}
          role="alert"
        >
          <li>{error}</li>
        </ul>
      ) : null}
      <Basic user={user} />

      <Advance user={user} />
    </div>
  );
}
