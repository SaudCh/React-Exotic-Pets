import React from "react";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import SearchBackground from "./img/search-background.jpg";

function Search() {
  return (
    <div className="search">
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}

export default Search;
