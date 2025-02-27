import React from "react";

const BloodBankCard = ({ blooddonar }) => {
  
  

  return (
    <div className="  mb-3" style={{ height: "20rem" }}>
      <div class="  col m-3 " style={{ height: "100%" }}>
        <div class=" card h-100 ">
          <div class="d-flex flex-column justify-content-between m-0 p-0 card-body">
            <div class="card-header bg-warning">
              <h5 class="card-title">{blooddonar.name}</h5>
            </div>
            <p class="card-text">
              <address> <span className="fw-bold">Address : </span>{blooddonar.address}</address>
            </p>
            <p class="card-text">
              <address> <span className="fw-bold">Blood Group : </span>{blooddonar.bloodgroup}</address>
            </p>
            <div>
              <p className="fw-bold bg-danger d-inline-block rounded p-2 text-white">
                Contract : {blooddonar.phone}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBankCard;
