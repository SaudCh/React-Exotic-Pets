import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CloseAccount() {
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faSearch} /> Close account
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
            value="option1"
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
            value="option2"
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
