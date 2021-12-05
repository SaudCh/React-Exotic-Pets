import React from "react";

export default function Card(props) {
  const { data } = props;
  return (
    <div class="card mb-3 col-11 col-md-5">
      <div class="row g-0">
        <div class="col-md-4 mt-4">
          <img
            src={data.img}
            class="img-fluid rounded-start"
            width={"150px"}
            alt=""
          />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{data.name}</h5>
            {/* <p class="card-text">{data.desc}</p> */}
            <p class="card-text">{data.location}</p>
            <p class="card-text">
              <small class="text-muted">{data.time}</small>
            </p>
            <div className="button-container">
              <button className="btn btn-secondary">Chat</button>
              <button className="btn btn-success">Add to Cart</button>
              <button
                onClick={() => props.wishlistH}
                className="btn btn-warning"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
