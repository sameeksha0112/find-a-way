import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='container' >
            <footer className='container footerColor mt-4'>
                <div className="row  ">
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-2 text-white">
                        <address>
                            <h5 className="fw-bold text-info">Contract Info</h5>

                            <p className=''>Address: 53/51 ,Norda, Dhaka-1212 </p>
                            <p>Phone: +880-01402948512</p>
                            <p>Email: mdhelaluddin2424@gmial.com</p>


                        </address>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mt-2 text-white">
                        <h5 className="fw-bold text-info">Service Hours</h5>
                        <p>
                            
                            We support 24/7 hours for any query and
                            share information. We provide only emergency
                            service in Dhaka city.

                        </p>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mt-2 text-white">
                        <h5 className="fw-bold logoColor text-info">Quick Links</h5>
                        <div className='d-flex flex-column'>
                            
                            <Link as={Link} to={"/services"} className='text-white m-1'>Services</Link>
                            <Link as={Link} to={"/about"} className='text-white m-1'>About</Link>
                            <Link as={Link} to={"/contract"} className='text-white m-1'>Contract</Link>

                        </div>
                    </div>



                </div>

                <div className="row footerColor text-white ">
                    <hr className="text-white" />
                    <div className="col">
                        <p className="text-secondary text-center  mt-2">Copyright &copy;
                            All Right Reserved to Emergency Service In Dhaka City.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;