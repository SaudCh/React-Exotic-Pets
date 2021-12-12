import React from "react";

export default function Result(props) {
  const { birds } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 border rounded">
          <div className="row">
            {birds.map((e) => (
              <h6>h</h6>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
