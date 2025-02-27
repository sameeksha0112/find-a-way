import React from "react";
import Navigation from "../../NavigationBar/Navigation";
import Footer from "../../Footer/Footer";
import "./Admin.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";


const Admin = () => {
  return (
    <div className="container ">
      {/*---------------------- This is header component ----------------------------*/}
      <Navigation></Navigation>

      {/* -------------------This is Dashboard section start here --------------------------- */}
      <div className="container">
        <div className=" row">
          <div className="col d-flex justify-content-between">
            <p className="fs-4 fw-bold tomato text-decoration-none">
              Dashboard
            </p>

            <div>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Admin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="dropdown-item" as={Link} to="/adminprofile">
                      Profile
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link className="dropdown-item" as={Link} to={"/adminlogin"}>
                      Log out
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12  d-flex flex-column">
            
            <div
              className="bg-white shadow p-3 mb-3 bg-body-tertiary border border-2"
              style={{ maxWidth: "10rem", height: "30rem" }}
              
            >
              {/* ----------------------Hospital dropdown start here ------------------------ */}
              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Hospital
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/hospitallist"
                      >
                        Hospital List
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/doctorlist"
                      >
                        Doctor List
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* ----------------------Hospital dropdown end here ------------------------ */}

              {/* ----------------------Blood dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Blood
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/bloodbanklist"
                      >
                        Blood Bank
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/blooddonarlist"
                      >
                        Blood Donar
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* ----------------------Blood dropdown end here ------------------------ */}

              {/* ----------------------Ambulance dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Ambulance
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/ambulancelist"
                      >
                        Ambulance List
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* ----------------------Ambulance dropdown start here ------------------------ */}

              {/* ----------------------Electricity dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Electricity
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/electricitylist"
                      >
                        Electricity Zone
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* ----------------------Electricity dropdown end here ------------------------ */}

              {/* ----------------------Fire Service dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Fire Service
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/fireservicelist"
                      >
                        Fire Service
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* ----------------------Fire Service dropdown end here ------------------------ */}

              {/* ----------------------Police dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Police
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/policestationlist"
                      >
                        Police Station
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* ----------------------Police dropdown end here ------------------------ */}



              {/* ----------------------User dropdown start here ------------------------ */}

              <div className="dropdown mb-3">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary dropdown-toggle"
                    style={{ width: "8rem", height: "auto" }}
                    variant="white"
                    id="dropdown-basic"
                  >
                    Users
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/users"
                      >
                        User Role
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* ----------------------User dropdown end here ------------------------ */}

              
            </div>

           
          </div>
        </div>
      </div>

      {/* -------------------This is Dashboard section end here --------------------------- */}

      {/* -------------------This is Footer component here --------------------------- */}
      <Footer></Footer>
    </div>
  );
};

export default Admin;
