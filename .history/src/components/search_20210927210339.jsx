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
    <div
      style={{ backgroundImage: `url(${SearchBackground})` }}
      className="search"
    ></div>
  );
}

export default Search;
