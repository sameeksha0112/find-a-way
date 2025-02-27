import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";
import './Services.css'

const Services = () => {
  return (
    <div className="container">
    <Navigation></Navigation>
      <h2 className="mb-3">All Service List:</h2>
      <div className=" row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Hospital</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 1.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
              <Link className="service-btn" as={Link} to="/hospitals">
                Click Me
              </Link>
            </div>
          </div>
        </div>

        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Blood</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 2.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
            <Link className="service-btn" as={Link} to="/bloods">
                Click Me
              </Link>
            </div>
          </div>
        </div>

        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Ambulance</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 3.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
            <Link className="service-btn" as={Link} to="/ambulances">
                Click Me
              </Link>
            </div>
          </div>
        </div>

        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Electircity</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 4.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
            <Link className="service-btn" as={Link} to="/electricity">
                Click Me
              </Link>
            </div>
          </div>
        </div>

        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Fire Service</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 5.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
            <Link className="service-btn" as={Link} to="/fireservice">
                Click Me
              </Link>
            </div>
          </div>
        </div>

        <div className="col emergencyPlanHover">
          <div className="card h-100">
            <div className="card-header LightSkyBlue">
              <h5 className="text-center text-white fw-bold">Police</h5>
            </div>

            <div className="card-body text-center">
              <img
                className="card-img-top"
                src={require("../../Assets/Images/icons/icons-service/Service 2.png")}
                style={{ maxWidth: "5rem", height: "5rem" }}
                alt=""
                srcset=""
              />
              <p className="mt-2">To Get Service</p>
            </div>
            <div className="card-footer text-center border-0 bg-white mb-3">
            <Link className="service-btn" as={Link} to="/police">
                Click Me
              </Link>
            </div>
          </div>
        </div>
      </div>

     <Footer></Footer>
    </div>
  );
};

export default Services;
