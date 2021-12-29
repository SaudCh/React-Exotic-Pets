import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function CloseAccount() {
  const [close, setClose] = useState(false);
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faTimesCircle} /> Close account
      </p>
      <hr />
      <p>You are sure you want to close your account?</p>
      <form action="">
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
      </form>
      <button className="btn btn-success mt-3">Submit</button>
    </div>
  );
}
