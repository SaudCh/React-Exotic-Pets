import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function form() {
  return (
    <form className="search-form" action="">
      <select class="form-select col-3" aria-label="Default select example">
        <option selected>Location</option>
        <option value="1">Lahore</option>
        <option value="2">Karachi</option>
        <option value="3">Islamabad</option>
      </select>
      <div class="mb-3">
        <input type="text" class="form-control" id="query" />
      </div>
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
