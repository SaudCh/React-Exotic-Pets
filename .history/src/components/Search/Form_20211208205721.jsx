import React, { useState } from "react";

export default function Form() {
  const [category, setCategory] = useState("");
  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form" action="">
        <select
          class="border"
          value={category}
          onChange={(e) => console.log(e.target.value)}
          aria-label="Default select example"
        >
          <option selected>Category</option>
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
