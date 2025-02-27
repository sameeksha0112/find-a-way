import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import AmbulanceCard from "../Cards/AmbulanceCard/AmbulanceCard";
import { Link } from "react-router-dom";


const Ambulance = () => {

  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/ambulances")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setAmbulances(data.data);
        } else {
          setAmbulances([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="container d-flex justify-content-between ">
        <div>
        <h3 className="fw-bold">Ambulance:</h3>
        </div>
        <Link className="btn btn-info fw-bold" as={Link} to="/services">
            Back
          </Link>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {ambulances.map((ambulance) => (
       <AmbulanceCard key={ambulance._id} ambulance={ambulance}></AmbulanceCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ambulance;
