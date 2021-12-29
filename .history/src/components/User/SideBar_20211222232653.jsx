import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const { url } = useRouteMatch();
  return (
    <div className="border bg-light p-3">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ fontSize: "15px" }}
            >
              My Account
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to={url}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Personal Home
            </Link>
          </div>
        </div>

        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{ fontSize: "15px" }}
            >
              My Ads
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to={`${url}/my-ads`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              My Ads
            </Link>
            <Link
              to={`${url}/fav-ads`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Favourites Ads
            </Link>
            <Link
              to={`${url}/saved-searches`}
              style={{ width: "100%" }}
              className="btn  border mb-1 bg-white"
            >
              Saved searches
            </Link>
            <Link
              to={`${url}/pending-approval`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Pending Approval
            </Link>
            <Link
              to={`${url}/archived-ads`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Archived ads
            </Link>
            <Link
              to={`${url}/conversion`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Conversation
            </Link>
          </div>
        </div>

        <div class="accordion-item  bg-light">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{ fontSize: "13px" }}
            >
              Terminate Account
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to={`${url}/close-account`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              <FontAwesomeIcon icon={faTimesCircle} /> Close Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
