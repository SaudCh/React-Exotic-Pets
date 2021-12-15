import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMapMarkerAlt,
  faClock,
  faFolder,
  faSync,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function SavedSearches() {
  return (
    <div className="border bg-light p-3">
      <p className="h3">
        <FontAwesomeIcon icon={faStar} /> Saved Searches
      </p>
      <hr />
    </div>
  );
}
