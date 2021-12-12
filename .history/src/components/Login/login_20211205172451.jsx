import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");

  return (
    <div>
      <form
        className="col-11 col-sm-6 p-4 border bg-light rounded"
        style={{ margin: "50px auto" }}
      >
        <h4 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Login
        </h4>
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            value={name}
            //onChange={setName}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
