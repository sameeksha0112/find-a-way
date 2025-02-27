import React from "react";

const ElectricityCard = ({ electricityMap }) => {
  const r = electricityMap.location;
  var windowFeatures = "width=400,height=400";

  function windowOpen() {
    return window.open(r, windowFeatures);
  }

  return (
    <div className="  mb-3" style={{ height: "20rem" }}>
      <div class="  col m-3 " style={{ height: "100%" }}>
        <div class=" card h-100 ">
          <div class="d-flex flex-column justify-content-between m-0 p-0 card-body">
            <div class="card-header bg-warning">
              <h5 class="card-title">{electricityMap.name}</h5>
            </div>
            <p class="card-text">
              <address><span className="fw-bold p-2">Address :</span>{electricityMap.address}</address>
            </p>
            <div>
              <p className="fw-bold bg-danger d-inline-block rounded p-2 text-white">
                Contract: {electricityMap.phone}
              </p>
            </div>
            <div class="card-footer bg-white border-secondary mb-3">
              <button
                onClick={windowOpen}
                className="btn btn-info fw-bold"
                style={{ maxwidth: "10rem" }}
              >
                Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityCard;
