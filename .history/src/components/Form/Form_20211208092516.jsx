import React from "react";

export default function Form() {
  return (
    <div className="">
      <form className="form row" action="">
        <select class="border col-3" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input placeholder="What ?" type="text" className="border col-3" />
        <input placeholder={"Where ?"} type="text" className="border col-3" />
        <button className="btn btn-success px-4 col-1">&#160; Find</button>
      </form>
    </div>
  );
}
