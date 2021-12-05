import React from "react";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
  faSearch,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import SearchBackground from "./img/search-background.jpg";

function Search() {
  return (
    <div className="search">
      <form className="form" action="">
        <input placeholder="&f24d;" type="text" />
        <input placeholder={"Where ?"} type="text" />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
          Find
        </button>
      </form>
    </div>
  );
}

export default Search;
