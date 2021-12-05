import React from "react";
import "./css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="search">
      <h3>EXOTIC PETS & ACCESSORIES</h3>
      <p>BUY & SELL | PETS MARKETPLACE | PAKISTAN</p>
      <form className="form" action="">
        <input placeholder="What" type="text" />
        <input placeholder={"Where ?"} type="text" />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
          Find
        </button>
      </form>
    </div>
  );
}

export default Home;
