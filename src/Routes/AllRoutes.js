import About from "../Components/About/About";
import Contract from "../Components/Contract/contract";
import HomeLayout from "../Components/Layout/HomeLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "../Components/Services/Services";
import Hospitals from "../Components/Hospitals/Hospitals";
import Doctors from "../Components/Doctors/Doctors";
import BloodBank from "../Components/BloodBank/BloodBank";
import Ambulances from "../Components/Ambulances/Ambulances";
import Electricity from "../Components/Electircity/Electircity";
import Fireservice from "../Components/Fireservice/Fireservice";
import Police from "../Components/Police/Police";
import BloodDonar from "../Components/BloodDonar/BloodDonar";
import Admin from "../Components/Dashboard/Admin/Admin";
import HospitalList from "../Components/Dashboard/Hospital-List/HospitalList";
import DoctorList from "../Components/Dashboard/Doctor-List/DoctorList";
import BloodBankList from "../Components/Dashboard/Blood-Bank-List/BloodBankList";
import BloodDonarList from "../Components/Dashboard/Blood-Donar-List/BloodDonarList";
import AmbulanceList from "../Components/Dashboard/Ambulance-List/AmbulanceList";
import ElectricityList from "../Components/Dashboard/Electricity-List/ElectricityList";
import FireServiceList from "../Components/Dashboard/Fire-Service-List/FireServiceList";
import PoliceStrationList from "../Components/Dashboard/Police-Station-List/PoliceStrationList";
import AdminProfile from "../Components/Dashboard/Admin-Profile/AdminProfile";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

import SignUp from "../Components/Authentication/SignUp";
import Login from "../Components/Authentication/Login";
import Users from "../Components/Dashboard/Users/Users";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Authentication/Loading";
import useAdmin from "../Components/Authentication/useAdmin";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => {
  const [user, loading] = useAuthState(auth);

  const [admin] = useAdmin(user);
  console.log(admin,'AllRoutes')

  if (loading ) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route path="/home" element={<HomeLayout />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contract" element={<Contract />}></Route>
          <Route path="/hospitals" element={<Hospitals />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/bloods" element={<BloodBank />}></Route>
          <Route path="/blooddonar" element={<BloodDonar />}></Route>
          <Route path="/ambulances" element={<Ambulances />}></Route>
          <Route path="/electricity" element={<Electricity />}></Route>
          <Route path="/fireservice" element={<Fireservice />}></Route>
          <Route path="/police" element={<Police />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>

          {/* ---------------- Admin route start here -------------------------------- */}

          {admin  &&  (
            <Route>
              <Route path="/admin" element={<ProtectedRoute>
                <Admin />
              </ProtectedRoute>}></Route>
              <Route path="/adminprofile" element={<AdminProfile />}></Route>
              <Route path="/hospitallist" element={<HospitalList />}></Route>
              <Route path="/doctorlist" element={<DoctorList />}></Route>
              <Route path="/bloodbanklist" element={<BloodBankList />}></Route>
              <Route
                path="/blooddonarlist"
                element={<BloodDonarList />}
              ></Route>
              <Route path="/ambulancelist" element={<AmbulanceList />}></Route>
              <Route
                path="/electricitylist"
                element={<ElectricityList />}
              ></Route>
              <Route
                path="/fireservicelist"
                element={<FireServiceList />}
              ></Route>
              <Route
                path="/policestationlist"
                element={<PoliceStrationList />}
              ></Route>
              <Route path="/admin" element={<AdminProfile />}></Route>
              <Route path="/users" element={<ProtectedRoute>
                <Users />
              </ProtectedRoute>}></Route>
            </Route>
            
            
          )
        
        
        }

          {/*---------------------------- Admin Log in ---------------------------- */}
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
