import React, { useState, useContext } from "react";
import Pakistan from "../img/pakistan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/auth-context";

import userlogo from "../img/user.png";

export default function Advance(props) {
  const auth = useContext(AuthContext);
  const { user } = props;
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const updatePassword = async (e) => {
    e.preventDefault();
    console.log(password, cPassword);
    try {
      //setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/updatePass/${1234}`,
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
      console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      //setError("");
      //setIsLoading(false);
    } catch (err) {
      //setIsLoading(false);
      //setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
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

      <div className="border rounded bg-light p-0 mt-2">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Account Details</p>
        </div>
        <div className="bg-white p-5">
          <form action="">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Gender
              </label>
              <div class="col-sm-10">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="male"
                    value="option1"
                  />
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="female"
                    value="option2"
                  />
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="name" />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Username
              </label>
              <div className="col-sm-10">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="user-addon">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ fontSize: "24px" }}
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    id="username"
                    aria-describedby="email-addon"
                  />
                </div>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="emial" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="email-addon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: "24px" }}
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    aria-describedby="email-addon"
                  />
                </div>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
                Phone Num
              </label>
              <div className="col-sm-10">
                <div class="input-group ">
                  <span class="input-group-text">
                    <img src={Pakistan} width={20} alt="+92" />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    id="phoneNumber"
                  />
                  <span class="input-group-text">
                    <input class="form-check-input mb-1 me-1" type="checkbox" />{" "}
                    Hide
                  </span>
                </div>
              </div>
            </div>

            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>

      <div className="border rounded bg-light p-0 mt-2">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Security</p>
        </div>
        <div className="bg-white p-5">
          <form onSubmit={updatePassword}>
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
            <div class="form-group mb-3">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
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
