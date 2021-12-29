import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

export default function Security(props) {
  const { setIsLoading } = props;

  const auth = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
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
  );
}
