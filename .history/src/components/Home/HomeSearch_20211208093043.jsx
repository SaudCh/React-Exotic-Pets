import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HomeSearch() {
  return (
    <div className="search">
      <h3>EXOTIC PETS & ACCESSORIES</h3>
      <p>BUY & SELL | PETS MARKETPLACE | PAKISTAN</p>
      <form className="form" action="">
        <input placeholder="What ?" type="text" className="border" />
        <input placeholder={"Where ?"} type="text" className="border" />
        <Link className="btn btn-success px-4">
          <FontAwesomeIcon icon={faSearch} />
          &#160; Find
        </Link>
      </form>
    </div>
  );
}
