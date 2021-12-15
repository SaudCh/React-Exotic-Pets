import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Conversation() {
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faEnvelope} /> Conversation
      </p>
      <hr />
      <p>You have no conversation.</p>
    </div>
  );
}
