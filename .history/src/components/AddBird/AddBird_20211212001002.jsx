import React, { useState } from "react";
import HtmlEditor from "./HtmlEditor";
import LiveSearch from "./LiveSearch";
import { getCities } from "../data/cities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function AddBird() {
  const options = getCities();
  const [location, setLocation] = useState();
  const setLoc = (e) => {
    if (e) {
      setLocation(e);
      console.log(location);
    } else {
      setLocation("");
    }
  };
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div
          className="col-11 col-md-6 border rounded bg-light pt-3 pb-4"
          style={{ margin: "0 auto" }}
        >
          <p>Post Free Ads</p>
          <hr />
          <form>
            <div className="form-group row">
              <label htmlFor="category" className="col-sm-2 col-form-label">
                Category
              </label>
              <div className="col-sm-10">
                <select className="form-control" id="category">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="sub-category" className="col-sm-2 col-form-label">
                Sub Category
              </label>
              <div className="col-sm-10">
                <select className="form-control" id="sub-category">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="sub-category" className="col-sm-2 col-form-label">
                Type
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  For Sale
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Required
                </label>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input type="text" class="form-control" id="title" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <HtmlEditor />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <div class="input-group mb-3">
                  <span class="input-group-text">Rs</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    aria-label="Username"
                  />
                  <span class="input-group-text">
                    <input
                      class="form-check-input mb-1"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />{" "}
                    Negotiable
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="category" className="col-sm-2 col-form-label">
                Location
              </label>
              <div className="col-sm-10">
                <LiveSearch
                  val={location}
                  setVal={setLoc}
                  data={options}
                  multi={false}
                />
              </div>
            </div>

            <hr />
            <h6> Seller information</h6>
            <hr />

            <div className="form-group row">
              <label htmlFor="category" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1 py-1">
                      <FontAwesomeIcon icon={faEnvelope} size="1x" />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
