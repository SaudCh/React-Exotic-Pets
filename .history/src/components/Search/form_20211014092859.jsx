import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function form() {
  return (
    <form className="search-form row" action="">
      <div className="col-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Location</option>
          <option value="1">Lahore</option>
          <option value="2">Karachi</option>
          <option value="3">Islamabad</option>
        </select>
      </div>
      <div class="col-7">
        <input type="text" class="form-control" id="query" />
      </div>
      <div className="col-3">
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
          Find
        </button>
      </div>
    </form>
  );
}
