import React from "react";

export default function Account() {
  return (
    <div className="border bg-light rounded row mt-2 p-3 align-items-center">
      <p className="h4">Hello Saud ul Hassan!</p>
      <div className="border rounded bg-light">
        <div className="border-bottom">
          <p className="h5 m-0 p-1 pb-2">Photo or Avatar</p>
        </div>
        <div style={{ height: "200px" }} className="bg-white"></div>
      </div>
    </div>
  );
}
