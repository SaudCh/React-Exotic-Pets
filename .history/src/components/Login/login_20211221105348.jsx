import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // setIsLoading(false);
      // auth.login();
    } catch (err) {
      // setIsLoading(false);
      setError(err.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div>
      <form
        className="col-11 col-sm-6 p-4 border bg-light rounded"
        style={{ margin: "50px auto" }}
        onSubmit={loginSubmit}
      >
        <h4 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Login
        </h4>
        {error ? (
          <ul
            className="alert alert-danger"
            style={{ listStyle: "none" }}
            role="alert"
          >
            <li>{error}</li>
          </ul>
        ) : null}
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
