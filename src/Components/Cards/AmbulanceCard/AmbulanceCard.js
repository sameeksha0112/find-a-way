import React from "react";

const AmbulanceCard = ({ ambulance }) => {
  


  

  return (
    <div className="  mb-3" style={{ height: "20rem" }}>
      <div class="  col m-3 " style={{ height: "100%" }}>
        <div class=" card h-100 ">
          <div class="d-flex flex-column justify-content-between m-0 p-0 card-body">
            <div class="card-header bg-warning">
              <h5 class="card-title">{ambulance.name}</h5>
            </div>
            <p class="card-text">
              <address><span className="fw-bold">Address : </span>{ambulance.address}</address>
            </p>
            <div>
              <p className="fw-bold bg-danger d-inline-block rounded p-2 text-white">
                <span>Contract : </span>{ambulance.phone}
              </p>
             
            </div>
            <div class="card-footer bg-white border-secondary mb-3">
            <h5><span className="fw-bold">Type:</span>{ambulance.kind}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceCard;
