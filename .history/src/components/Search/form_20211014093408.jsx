import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <form className="search-form my-5" action="">
      <div className="col-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Location</option>
          <option value="1">Lahore</option>
          <option value="2">Karachi</option>
          <option value="3">Islamabad</option>
        </select>
      </div>
      <div class="col-6">
        <input type="text" class="form-control" id="query" disabled />
      </div>
      <div className="col-1">
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
          Find
        </button>
      </div>
    </form>
  );
}
