import React from "react";

const DoctorsCard = ({ doctor }) => {
  // const r = doctor.Chamber;
  // var windowFeatures = "width=400,height=400";

  // function windowOpen() {
  //   return window.open(r, windowFeatures);
  // }

  return (
    <div className="mb-3" style={{ height: "30rem" }}>
      <div class="col m-3 " style={{ height: "100%" }}>
        <div class=" card h-100 ">
          <div class="d-flex flex-column justify-content-between m-0 p-0 card-body">
            <div class="card-header bg-warning">
              <h5 class="card-title">{doctor.name}</h5>
            </div>
           
            <p class="card-text p-2">
              <address> <span className="fw-bold">Degree :</span> {doctor.degree}</address>
            </p>
            <div>
              <p className="fw-bold bg-danger d-inline-block rounded p-2 text-white">
              Appointment : {doctor.contract}
              </p>
              <p className="p-2"><span className="fw-bold">Specialty : </span> {doctor.specialty}</p>
              <p><span className="fw-bold">Workplace :</span>{doctor.workplace}</p>
              <p><span className="fw-bold">Chamber :</span>{doctor.chamber}</p>
             
            </div>
            <div class="card-footer bg-white border-secondary mb-3">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
