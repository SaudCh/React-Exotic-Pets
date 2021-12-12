import React from "react";
import HtmlEditor from "./HtmlEditor";
export default function AddBird() {
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
            <div class="container">
              <div class="row">
                <h2>Bootstrap-select example</h2>
                <p>
                  This uses{" "}
                  <a href="https://silviomoreto.github.io/bootstrap-select/">
                    https://silviomoreto.github.io/bootstrap-select/
                  </a>
                </p>
                <hr />
              </div>

              <div class="row-fluid">
                <select
                  class="selectpicker"
                  data-show-subtext="true"
                  data-live-search="true"
                >
                  <option data-subtext="Rep California">Tom Foolery</option>
                  <option data-subtext="Sen California">Bill Gordon</option>
                  <option data-subtext="Sen Massacusetts">
                    Elizabeth Warren
                  </option>
                  <option data-subtext="Rep Alabama">Mario Flores</option>
                  <option data-subtext="Rep Alaska">Don Young</option>
                  <option data-subtext="Rep California" disabled="disabled">
                    Marvin Martinez
                  </option>
                </select>
                <span class="help-inline">
                  With{" "}
                  <code>data-show-subtext="true" data-live-search="true"</code>.
                  Try searching for california
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
