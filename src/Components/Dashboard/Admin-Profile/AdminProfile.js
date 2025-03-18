import React from "react";
import Navigation from "../../NavigationBar/Navigation";
import Footer from "../../Footer/Footer";
import image from "../../../Assets/Images/Admin-Profile/adminLogin.png";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  return (
    <div >
      <Navigation></Navigation>

      <div className="row justify-content-evenly mt-5 mb-5">
        <div
          className="  col-lg-12 col-md-6 col-sm-4 border shadow"
          style={{ width: "30rem", hight: "auto" }}
        >
          <h2 className="mt-2">Admin</h2>
          <img
            className="img-fluid rounded border m-3"
            style={{ width: "10rem" }}
            src={image}
            alt="Profile"
            srcset=""
          />

          <h3> Name: SAM</h3>
          <p>Email: FindMyWay@gmail.com</p>
          <p>Phone: 01402948512</p>
          <p>Sex: Female</p>
          <div>
            <Link as={Link} to={"/admin"} className="btn btn-success m-3 fw-bold">Back</Link>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminProfile;
