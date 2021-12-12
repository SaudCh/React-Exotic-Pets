import React from "react";

export default function Form() {
  return (
    <div className="container-fluid">
      <form className="form" action="">
        <input placeholder="What ?" type="text" className="border" />
        <input placeholder={"Where ?"} type="text" className="border" />
        <button className="btn btn-success px-4">&#160; Find</button>
      </form>
    </div>
  );
}
