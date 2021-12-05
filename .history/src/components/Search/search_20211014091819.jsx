import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form className="search-form" action="">
      <input placeholder="What" type="text" disabled />
      <input placeholder={"Where ?"} type="text" />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
