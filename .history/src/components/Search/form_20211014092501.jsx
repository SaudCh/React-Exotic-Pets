import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function form() {
  return (
    <form className="search-form" action="">
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

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
