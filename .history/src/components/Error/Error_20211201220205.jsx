import React from "react";

export default function Error() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>Invalid Link</p>
    </div>
  );
}
