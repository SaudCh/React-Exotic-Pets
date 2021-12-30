import React, { useState, useContext, useEffect } from "react";
import Pakistan from "../img/pakistan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/auth-context";

export default function AccountDetail(props) {
  const auth = useContext(AuthContext);
  const { user, setIsLoading } = props;
  const [gender, setGender] = useState(user.gender);
  const [uName, setUName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUserName] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      //setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/user/${auth.userId}`
        );
        const responseData = await response.json();
        //console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setEmail(responseData.email);
        setPhone(responseData.phone);
        setUName(responseData.name);
        setUserName(responseData.username);
        setGender(responseData.gender);
        //console.log(responseData);
        //setIsLoading(false);
      } catch (err) {
        //setIsLoading(false);
        setError(err.message || "Something went wrong, please try again.");
      }
    };
    fetchUserData();
  }, [auth.userId]);

  const updateInfo = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/updateInfo/${auth.userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gender: gender,
            name: uName,
            email: email,
            phone: phone,
            username: username,
          }),
        }
      );

      const responseData = await response.json();
      //console.log(responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setSuccess(responseData.message);
      setError("");

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong");
    }
  };
  return (
    <div className="border rounded bg-light p-0 mt-2">
      <div className="border-bottom">
        <p className="h5 m-0 p-2 pb-2">Account Details</p>
      </div>

      <div className="bg-white p-5 pt-4">
        {error ? (
          <ul
            className="alert alert-danger m-2"
            style={{ listStyle: "none" }}
            role="alert"
          >
            <li>{error}</li>
          </ul>
        ) : null}
        {success ? (
          <ul
            className="alert alert-success m-2"
            style={{ listStyle: "none" }}
            role="alert"
          >
            <li>{success}</li>
          </ul>
        ) : null}
        <form onSubmit={updateInfo} className="mt-4">
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
                required
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
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
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
                  type="email"
                  required
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
