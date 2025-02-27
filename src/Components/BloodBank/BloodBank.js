import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BloodBankCard from "../Cards/BloodBankCard/BloodBankCard";



const BloodBank = () => {
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/bloodbanks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setBloodBanks(data.data);
        } else {
          setBloodBanks([]);
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
        <h3 className="fw-bold">Blood Bank:</h3>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-info fw-bold" as={Link} to="/blooddonar">
            Blood Donar
          </Link>
        </div>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {bloodBanks.map((bloodbank) => (
         <BloodBankCard key={bloodbank._id} bloodbank={bloodbank}></BloodBankCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default BloodBank;
