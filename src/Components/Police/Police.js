import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import PoliceStationCard from "../Cards/PoliceStationCard/PoliceStationCard";
import { Link } from "react-router-dom";


const Police = () => {

  const [policestation, setPolicestation] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/policestation")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setPolicestation(data.data);
        } else {
          setPolicestation([]);
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
        <h3 className="fw-bold">Police Station:</h3>
        </div>
        <Link className="btn btn-info fw-bold" as={Link} to="/services">
            Back
          </Link>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {policestation.map((policestationMap) => (
       <PoliceStationCard key={policestationMap._id} policestationMap={policestationMap}></PoliceStationCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Police;
