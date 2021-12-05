import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form className="search-form" action="">
      <input placeholder="What" type="text" disabled />
      <select class="form-select" aria-label="Default select example">
        <option selected>Location</option>
        <option value="1">Lahore</option>
        <option value="2">Karachi</option>
        <option value="3">Islamabad</option>
      </select>
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
