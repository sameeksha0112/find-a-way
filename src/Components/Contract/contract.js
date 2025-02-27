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
                        <p><i className="bi bi-geo-alt fs-4"></i> Address: 53/51 ,Norda, Dhaka-1212</p>
                        <p> <i className="bi bi-phone fs-4"></i>Phone: +880-01402948512</p>
                        <p><i className="bi bi-envelope fs-4 me-2"></i>Email:mdhelaluddin2424@gmail.com</p>
                    </address>

                </div>
                <div className="col-sm-12 col-md-6">
                    <h3 className="fw-bold">Our Location</h3>
                    <div className="ratio ratio-16x9 border border-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.1305846615805!2d90.41934321367769!3d23.8093102395454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ad5b122b19%3A0x37b7cec2ba66e4da!2sNadda%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1678898944648!5m2!1sen!2sbd" title='map' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contract;