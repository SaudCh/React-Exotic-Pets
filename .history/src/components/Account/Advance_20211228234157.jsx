import React, { useState, useRef, useEffect } from "react";

import LoadingSpinner from "../Shared/LoadingSpinner";

import userlogo from "../img/user.png";
import AccountDetail from "./AccountDetail";
import Security from "./Security";

export default function Advance(props) {
  const { user } = props;
  const imgUploadRef = useRef();
  const [isLoading, setIsLoading] = useState("");
  const [file, setFile] = useState();
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

  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
      {isLoading && <LoadingSpinner asOverlay />}
      <p className="h4">Hello {user.name}!</p>

      <div className="border rounded bg-light p-0">
        <div className="border-bottom">
          <p className="h5 m-0 p-2 pb-2">Photo or Avatar</p>
        </div>
        <div
          style={{ height: "260px", flexDirection: "column" }}
          className="bg-white d-flex justify-content-center align-items-center"
        >
          <img
            src={Preview ? Preview : userlogo}
            width={160}
            className="border rounded"
            alt=""
          />

          <button className="btn" onClick={() => imgUploadRef.current.click()}>
            Change
          </button>
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
