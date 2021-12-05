import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const handleAddrTypeChange = (e) => {
    //console.clear();
    console.log(e.target.value);
  };

  return (
    <div>
      <button>Wish List</button>
      <form className="search-form my-5">
        <div className="col-3">
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Location</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
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
    </div>
  );
}
