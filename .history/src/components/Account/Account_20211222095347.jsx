import React, { useState, useEffect, useContext } from "react";
import Advance from "./Advance";
import Basic from "./Basic";
import { AuthContext } from "../context/auth-context";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function Account() {
  const auth = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchBirds = async () => {
      setIsLoading(true);
      console.log(auth.userId);
      try {
        const response = await fetch(
          `http://localhost:5000/user/${auth.userId}`
        );
        const responseData = await response.json();
        console.log(responseData);
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
      <Basic user={user} />

      <Advance user={user} />
    </div>
  );
}
