import React, { useState, useEffect, useContext } from "react";
import Advance from "./Avatar";
import Basic from "./Basic";
import { AuthContext } from "../context/auth-context";
import LoadingSpinner from "../Shared/LoadingSpinner";

import AccountDetail from "./AccountDetail";
import Security from "./Security";

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

      <div className="border bg-light rounded row mt-2 p-3 align-items-center">
        <p className="h4">Hello {user.name}!</p>
        <Advance user={user} setIsLoading={setIsLoading} />
        <AccountDetail user={user} setIsLoading={setIsLoading} />
        <Security setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
