import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/auth-context";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";

export default function CloseAccount() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [close, setClose] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const deleteAccount = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/delete/${auth.userId}`,
        {
          method: "DELETE",
        }
      );

      const responseData = await response.json();
      //console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // setSuccess(responseData.message);
      //setError("");

      setIsLoading(false);
      auth.logout();
      history.push(`/`);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong");
    }
  };
  return (
    <div className="border bg-light p-3">
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
      <p className="h3">
        <FontAwesomeIcon icon={faTimesCircle} /> Close account
      </p>
      <hr />
      <p>You are sure you want to close your account?</p>
      <form onSubmit={deleteAccount}>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            checked={close === true}
            onClick={() => setClose(true)}
          />
          <label class="form-check-label" for="inlineRadio1">
            Yes
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            checked={close === false}
            onClick={() => setClose(false)}
          />
          <label class="form-check-label" for="inlineRadio2">
            No
          </label>
        </div>
        <br />
        <button disabled={!close} className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
