import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ElectricityCard from "../Cards/ElectricityCard/ElectricityCard";
import { Link } from "react-router-dom";


const Electricity = () => {

  const [electricity, setElectricity] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/electricity")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setElectricity(data.data);
        } else {
          setElectricity([]);
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
        <h3 className="fw-bold">Electricity:</h3>
        </div>
        <Link className="btn btn-info fw-bold" as={Link} to="/services">
            Back
          </Link>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {electricity.map((electricityMap) => (
       <ElectricityCard key={electricityMap._id} electricityMap={electricityMap}></ElectricityCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Electricity;
