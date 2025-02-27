import React, {  useState } from "react";

const InformationSearch = () => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  const searchItem = () => {
    fetch("http://localhost:5000/api/hospitals?address=" + query)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log("Success");
          setResult(data.data);
          console.log(result);
        } else {
          setResult([]);
        }
        console.log("Result", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clearSearchItem = () => {
    setResult([]);
  };
  const setQueryData = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };


  const r = result.location;
  var windowFeatures = "width=400,height=400";

  function windowOpen() {
    return window.open(r, windowFeatures);
  }
  return (
    <div>
      <div className="container" >
        <h2 className="text-center fw-bold m-5 ">Find your information </h2>
        <div className=" row shadow p-3 m-2 bg-body-tertiary rounded border border-2 ">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <select className="form-select m-2 " onChange={clearSearchItem}>
              <option selected>Select Service</option>
              <option value="1">Hospital</option>
              <option value="2">Doctor</option>
              <option value="3">Blood Bank</option>
              <option value="3">Blood Donar</option>
              <option value="3">Ambulance</option>
              <option value="3">Electricity</option>
              <option value="3">Fire Station</option>
              <option value="3">Police</option>
            </select>
          </div>

          <div className="col-lg-5 col-md-4 col-sm-12">
            <select
              className="form-select  m-2"
              onChange={(e) => setQueryData(e)}
            >
              <option selected>Select Area</option>
              <option value="Mohammadpur">Mohammadpur</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Mirpur">Mirpur </option>
              <option value="Uttara">Uttara </option>
              <option value="Gulshan">Gulshan </option>
              <option value="Motijeel">Motijeel </option>
              <option value="Kamrangirchar">Kamrangirchar </option>
              <option value="Khilgoan">Khilgoan </option>
            </select>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 text-center">
            <button
              className="btn btn-primary m-2 fw-bold "
              onClick={searchItem}
            >
              Search
            </button>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between ">
        {result.map((item) => (
          <div className="container mb-3" style={{width:"30rem", height: "25rem" }}>
            <div class="col m-3 " style={{ height: "100%" }}>
              <div class=" card h-100 ">
                <div class="d-flex flex-column justify-content-between m-0 p-0 card-body">
                  <div class="card-header bg-warning">
                    <h3 className="card-title">{item.name}</h3>
                  </div>
                  <p class="card-text">
                    <address> <span className="fw-bold">Address: </span>{item.address}</address>
                  </p>
                  <div>
                    <p className="fw-bold bg-danger d-inline-block rounded p-2 text-white">
                      Contract: {item.phone}
                    </p>
                  </div>
                  <div class="card-footer bg-white border-secondary mb-3">
                    <button  onClick={windowOpen}
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
        ))}
      </div>

        <div className="mt-4">
          <img
            className="img-fluid mb-5"
            src={require("../../Assets/Images/emergency-banner/emergency-banner.png")}
            alt=""
            srcset=""
          />
        </div>
      </div>

      
    </div>
  );
};

export default InformationSearch;
