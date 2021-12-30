import React, { useState, useRef, useEffect, useContext } from "react";
import userlogo from "../img/user.png";
import AccountDetail from "./AccountDetail";
import Security from "./Security";
import { AuthContext } from "../context/auth-context";

export default function Advance(props) {
  const auth = useContext(AuthContext);
  const { user, setIsLoading } = props;
  const imgUploadRef = useRef();
  const [file, setFile] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [Preview, setPreview] = useState();
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setFile(e.target.files[0]);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("uid", auth.userId);

    try {
      const response = await fetch(`http://localhost:5000/user/img/update`, {
        method: "PATCH",
        body: formData,
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setSuccess((pre) => ({ ...pre, password: responseData.message }));
      setError("");

      setIsLoading(false);
    } catch (err) {}
  };

  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
      <p className="h4">Hello {user.name}!</p>

      <div className="border rounded bg-light p-0">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Photo or Avatar</p>
        </div>
        <div
          style={{ padding: "50px 0", flexDirection: "column" }}
          className="bg-white d-flex justify-content-center align-items-center"
        >
          {!isValid ? (
            <img
              src={
                user.image ? "http://localhost:5000/" + user.image : userlogo
              }
              width={160}
              className="border rounded"
              alt=""
            />
          ) : (
            <img src={Preview} width={160} className="border rounded" alt="" />
          )}

          <div className="mt-2">
            <button
              className="btn btn-warning me-2"
              onClick={() => imgUploadRef.current.click()}
            >
              Change
            </button>
            <button
              className="btn btn-success ms-2"
              disabled={!isValid}
              onClick={() => handleSubmit()}
            >
              Update
            </button>
          </div>
          {/* {selectedFile} */}
        </div>
        <form action="">
          <input
            ref={imgUploadRef}
            style={{ display: "none" }}
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleChange}
          />
        </form>
      </div>

      <AccountDetail user={user} setIsLoading={setIsLoading} />
      <Security setIsLoading={setIsLoading} />
    </div>
  );
}
