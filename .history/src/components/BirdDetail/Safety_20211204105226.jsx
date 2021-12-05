import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Safety() {
  return (
    <div className="border rounded mt-3">
      <div className="bg-light py-2">
        <p className="m-0 p-0 text-center">Safety Tips for Buyer</p>
      </div>
      <hr className="m-0" />
      <p className="p-0 m-0" style={{ fontSize: 13 }}>
        <FontAwesomeIcon icon={faCheck} />
        &#160; Meet seller at a public place
      </p>
      <p className="p-0 m-0" style={{ fontSize: 13 }}>
        <FontAwesomeIcon icon={faCheck} />
        &#160; Check the item before you buy
      </p>
      <p className="p-0 m-0" style={{ fontSize: 13 }}>
        <FontAwesomeIcon icon={faCheck} /> &#160; Pay only after collecting the
        item
      </p>
    </div>
  );
}
