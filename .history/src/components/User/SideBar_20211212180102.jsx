import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
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
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              My Ads
            </Link>
            <Link
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Favourites Adds
            </Link>
            <Link
              style={{ width: "100%" }}
              className="btn  border mb-1 bg-white"
            >
              Personal Home
            </Link>
            <Link
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Personal Home
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
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Close Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
