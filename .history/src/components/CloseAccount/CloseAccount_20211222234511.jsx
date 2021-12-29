import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/auth-context";

export default function CloseAccount() {
  const auth = useContext(AuthContext);
  const [close, setClose] = useState(false);
  const deleteAccount = async (e) => {
    e.preventDefault();
    console.log("hello");

    try {
      //setIsLoading(true);
      const response = await fetch(`http://localhost:5000/user/delete/1234`, {
        method: "DELETE",
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // setSuccess(responseData.message);
      //setError("");

      //setIsLoading(false);
    } catch (err) {
      //setIsLoading(false);
      //setError(err.message || "Something went wrong");
    }
  };
  return (
    <div className="border bg-light p-3">
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
