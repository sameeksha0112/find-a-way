
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/Images/icons/logo.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import useAdmin from "../Authentication/useAdmin";


function Navigation() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
    const handleSignOut = () => {
        signOut(auth);
    }

   
   

  return (
    <div className="container">
      <Navbar
        className="bg-white shadow p-3 mb-3 rounded text-black"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        
          <div className="me-5">
            <img
              alt="Logo"
              src={logo}
              srcSet={`${logo} 300w, ${logo} 768w, ${logo} 1280w`}
            />
          </div>
          
          <Navbar.Brand as={Link} to="/" className="text-black fw-bold " href="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-primary"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/services" className="text-black fw-bold " href="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-black fw-bold " href="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contract" className="text-black fw-bold " href="/contract">
                Contract
              </Nav.Link>
              {
                admin &&  <Nav.Link as={Link} to="/admin" className="text-black fw-bold " href="/admin">
                Dashboard
              </Nav.Link>
              }
              
            </Nav>
            <Nav>
              
              
              <div>
              {
                user?<Dropdown>

                <Dropdown.Toggle className="btn btn-success text-white fw-bold" id="dropdown-basic">
                  User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="dropdown-item" as={Link} to="/adminprofile">
                      Profile
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <btn  className="dropdown-item" onClick={handleSignOut} >
                      Log out
                    </btn>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :<div>
                <Link className="btn border-primary me-2" as={Link} to="/signup">
              Sign Up
            </Link>
            <Link className="btn btn-primary" as={Link} to="/login">
              Login
            </Link>
              </div>

              }
            </div>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
}

export default Navigation;
