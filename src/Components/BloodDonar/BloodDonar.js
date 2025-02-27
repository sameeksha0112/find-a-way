// import React, { useEffect, useState } from "react";
import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import BloodBankCard from "../Cards/BloodDonarCard/BloodDonarCard";
import { Link } from "react-router-dom";

const BloodDonar = () => {

  const [bloodDonar, setBloodDonar] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/blooddonars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setBloodDonar(data.data);
        } else {
          setBloodDonar([]);
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
        <h3 className="fw-bold">Blood Donar:</h3>
        </div>
        <Link className="btn btn-info fw-bold" as={Link} to="/bloods">
            Back
          </Link>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {bloodDonar.map((blooddonar) => (
       <BloodBankCard key={blooddonar._id} blooddonar={blooddonar}></BloodBankCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default BloodDonar;
