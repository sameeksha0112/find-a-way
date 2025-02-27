import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import FireServiceCard from "../Cards/FireServiceCard/FireServiceCard";
import { Link } from "react-router-dom";


const FireService = () => {

  const [fireservice, setFireservice] = useState([]);

  useEffect(() => {
    // setLoading(true)
    fetch("http://localhost:5000/api/fireservice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setFireservice(data.data);
        } else {
          setFireservice([]);
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
        <h3 className="fw-bold">Fire Service:</h3>
        </div>
        <Link className="btn btn-info fw-bold" as={Link} to="/services">
            Back
          </Link>
      </div>

      <div className=" container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0 justify-content-between">

      {fireservice.map((fireserviceMap) => (
       <FireServiceCard key={fireserviceMap._id} fireserviceMap={fireserviceMap}></FireServiceCard>
        ))}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default FireService;
