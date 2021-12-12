import React from "react";

export default function Form() {
  return (
    <div className="container-fluid">
      <form className="form" action="">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input placeholder="What ?" type="text" className="border" />
        <input placeholder={"Where ?"} type="text" className="border" />
        <button className="btn btn-success px-4">&#160; Find</button>
      </form>
    </div>
  );
}
