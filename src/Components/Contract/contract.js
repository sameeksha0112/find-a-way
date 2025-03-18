import React from 'react';
import Navigation from '../NavigationBar/Navigation';
import Footer from '../Footer/Footer';

const Contract = () => {
    return (
        <div className='container'>
           <Navigation></Navigation>
            <div className="row m-5">
                <div className="col-sm-12 col-md-6 ">
                    <h3 className="fw-bold">Contract Information</h3>

                    <address>
                        <p><i className="bi bi-geo-alt fs-4"></i> Address: 53/51 ,Telangana, Hyderabad-500100</p>
                        <p> <i className="bi bi-phone fs-4"></i>Phone: +91-1234567890</p>
                        <p><i className="bi bi-envelope fs-4 me-2"></i>Email:FindMyWay@gmail.com</p>
                    </address>

                </div>
                <div className="col-sm-12 col-md-6">
                    <h3 className="fw-bold">Our Location</h3>
                    <div className="ratio ratio-16x9 border border-2">
                        <iframe src="https://www.google.com/maps/place/HITEC+City/@17.4477523,78.3559197,14z/data=!4m10!1m2!2m1!1shitech+city+location+map+link!3m6!1s0x3bcb93df6c34c5f7:0xe3b8b434e51adddc!8m2!3d17.4489198!4d78.3831911!15sCh1oaXRlY2ggY2l0eSBsb2NhdGlvbiBtYXAgbGlua1ofIh1oaXRlY2ggY2l0eSBsb2NhdGlvbiBtYXAgbGlua5IBDnN1YndheV9zdGF0aW9u4AEA!16s%2Fg%2F11gnrlymv3?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" title='map' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contract;