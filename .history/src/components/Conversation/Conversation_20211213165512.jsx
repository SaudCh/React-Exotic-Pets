import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Conversation() {
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faEnvelope} /> Saved Searches
      </p>
      <hr />
      <p>You have no saved search.</p>
    </div>
  );
}
