import React, { useState } from "react";
import Pakistan from "../img/pakistan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

export default function AccountDetail(props) {
  const { user } = props;
  const [gender, setGender] = useState(user.gender);
  const [uName, setUName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  return (
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
                  name="gender"
                  id="male"
                  value="Male"
                  checked={gender === "Male"}
                  onClick={() => setGender("Male")}
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  checked={gender === "Female"}
                  onClick={() => setGender("Female")}
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
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                value={uName}
                onChange={(e) => setUName(e.target.value)}
              />
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
                  placeholder="Username"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
  );
}
