import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    // <div className="border">
    //   <div class="accordion accordion-flush" id="accordionFlushExample">
    //     <div class="accordion-item">
    //       <h2 class="accordion-header" id="flush-headingOne">
    //         <button
    //           class="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#flush-collapseOne"
    //           aria-expanded="false"
    //           aria-controls="flush-collapseOne"
    //         >
    //           My Account
    //         </button>
    //       </h2>
    //       <div
    //         id="flush-collapseOne"
    //         class="accordion-collapse collapse"
    //         aria-labelledby="flush-headingOne"
    //         data-bs-parent="#accordionFlushExample"
    //       >
    //         <Link className="btn">Personal Home</Link>
    //       </div>
    //     </div>
    //     <hr />

    //     <div class="accordion-item">
    //       <h2 class="accordion-header" id="flush-headingTwo">
    //         <button
    //           class="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#flush-collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="flush-collapseTwo"
    //         >
    //           My Ads
    //         </button>
    //       </h2>
    //       <div
    //         id="flush-collapseTwo"
    //         class="accordion-collapse collapse"
    //         aria-labelledby="flush-headingTwo"
    //         data-bs-parent="#accordionFlushExample"
    //       >
    //         <div class="accordion-body">
    //           Placeholder content for this accordion, which is intended to
    //           demonstrate the <code>.accordion-flush</code> class. This is the
    //           second item's accordion body. Let's imagine this being filled with
    //           some actual content.
    //         </div>
    //       </div>
    //     </div>

    //     <div class="accordion-item">
    //       <h2 class="accordion-header" id="flush-headingThree">
    //         <button
    //           class="accordion-button collapsed"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#flush-collapseThree"
    //           aria-expanded="false"
    //           aria-controls="flush-collapseThree"
    //         >
    //           Terminate Account
    //         </button>
    //       </h2>
    //       <div
    //         id="flush-collapseThree"
    //         class="accordion-collapse collapse"
    //         aria-labelledby="flush-headingThree"
    //         data-bs-parent="#accordionFlushExample"
    //       >
    //         <div class="accordion-body">
    //           Placeholder content for this accordion, which is intended to
    //           demonstrate the <code>.accordion-flush</code> class. This is the
    //           third item's accordion body. Nothing more exciting happening here
    //           in terms of content, but just filling up the space to make it
    //           look, at least at first glance, a bit more representative of how
    //           this would look in a real-world application.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        class="offcanvas offcanvas-start w-25"
        tabindex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div class="offcanvas-header">
          <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">
            Menu
          </h6>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body px-0">
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li class="nav-item">
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                class="nav-link text-truncate"
              >
                <i class="fs-5 bi-speedometer2"></i>
                <span class="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-table"></i>
                <span class="ms-1 d-none d-sm-inline">Orders</span>
              </a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle  text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fs-5 bi-bootstrap"></i>
                <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-grid"></i>
                <span class="ms-1 d-none d-sm-inline">Products</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-truncate">
                <i class="fs-5 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Customers</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col min-vh-100 py-3">
            <button
              class="btn float-end"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              role="button"
            >
              <i
                class="bi bi-arrow-right-square-fill fs-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              ></i>
            </button>
            Content..
          </div>
        </div>
      </div>
    </div>
  );
}
