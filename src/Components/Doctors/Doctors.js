import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorsCard from "../Cards/DoctorsCard/DoctorsCard";

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setDoctorsData(data.data);
        } else {
          setDoctorsData([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="container d-flex justify-content-between mt-4 ">
        <div>
          <h3 className="fw-bold">Doctors:</h3>
        </div>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-info fw-bold" as={Link} to="/hospitals">
            Back
          </Link>
        </div>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">
        {doctorsData.map((doctor) => (
         <DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Doctors;
