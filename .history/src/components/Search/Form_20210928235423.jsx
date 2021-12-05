import React from "react";

export default function Form() {
  return (
    <form className="form" action="">
      <input placeholder="What" type="text" />
      <input placeholder={"Where ?"} type="text" />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
        Find
      </button>
    </form>
  );
}
