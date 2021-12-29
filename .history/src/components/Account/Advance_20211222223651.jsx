import React, { useState, useContext } from "react";

import { AuthContext } from "../context/auth-context";
import LoadingSpinner from "../Shared/LoadingSpinner";

import userlogo from "../img/user.png";
import AccountDetail from "./AccountDetail";

export default function Advance(props) {
  const auth = useContext(AuthContext);
  const { user } = props;

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const updatePassword = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/updatePass/${auth.userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
          }),
        }
      );

      const responseData = await response.json();
      //console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setSuccess((pre) => ({ ...pre, password: responseData.message }));
      setError("");
      setPassword("");
      setCPassword("");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError((error) => ({
        ...error,
        password: err.message || "Something went wrong",
      }));
    }
  };

  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
      {isLoading && <LoadingSpinner asOverlay />}
      <p className="h4">Hello {user.name}!</p>

      <div className="border rounded bg-light p-0">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Photo or Avatar</p>
        </div>
        <div
          style={{ height: "260px" }}
          className="bg-white d-flex justify-content-center align-items-center"
        >
          <img src={userlogo} width={160} className="border rounded" alt="" />
        </div>
      </div>

      <AccountDetail user={user} />

      <div className="border rounded bg-light p-0 mt-2">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Security</p>
        </div>
        <div className="bg-white p-5">
          {error.password ? (
            <ul
              className="alert alert-danger"
              style={{ listStyle: "none" }}
              role="alert"
            >
              <li>{error.password}</li>
            </ul>
          ) : null}
          {success.password ? (
            <ul
              className="alert alert-success"
              style={{ listStyle: "none" }}
              role="alert"
            >
              <li>{success.password}</li>
            </ul>
          ) : null}
          <form onSubmit={updatePassword}>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-group mb-3">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                required
                class="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
