import React from "react";

export default function CloseAccount() {
  return (
    <div className="border bg-light">
      <p> Close account</p>
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
      <button className="btn btn-success">Submit</button>
    </div>
  );
}
