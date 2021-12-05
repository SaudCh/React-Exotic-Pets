import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form className="search-form" action="">
      <input placeholder="What" type="text" disabled />
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
