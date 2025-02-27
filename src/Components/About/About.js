import React from 'react';
import Navigation from '../NavigationBar/Navigation';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className='container'>
           <Navigation></Navigation>
            <div className="  row mt-3">
                <div className="col-lg-6 col-sm-12 mt-3">
                    <div>
                        <h3>
                            You find here your valuable information in short time.
                        </h3>
                    </div>

                    <div>

                        <span className="btn btn-outline-danger m-2">Hospital</span>
                        <span className="btn btn-outline-danger  m-2">Doctor</span>
                        <span className="btn btn-outline-danger  m-2">Blood</span>
                        <span className="btn btn-outline-danger  m-2">Ambulance</span>
                        <span className="btn btn-outline-danger  m-2">Electricity</span>
                        <span className="btn btn-outline-danger  m-2">Fire Service</span>
                        <span className="btn btn-outline-danger  m-2">Police</span>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid" src={require("../../Assets/Images/About-images/about_image.jpg")} alt="" srcset="" />
                </div>
            </div>



            <h2 className="mt-3 ">Emergency plan:</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 mt-2">
                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header  border-success fw-bold text-center bg-warning">Identify potential
                            emergencies</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Identify the types of emergencies that could occur in your area such as
                                natural disasters, fires, medical emergencies, or security threats.</p>
                        </div>
                    </div>
                </div>
                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header bg-warning border-success fw-bold text-center">Develop a communication
                            plan</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Establish a communication plan with family members, employees, or
                                colleagues in case of an emergency. This should include a designated meeting spot and a
                                way to contact each other.</p>
                        </div>
                    </div>
                </div>

                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header bg-warning border-success fw-bold text-center">Evacuation plan</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Create an evacuation plan for your home or workplace. This should
                                include escape routes, designated exits, and a plan for helping those who may need
                                assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header bg-warning border-success fw-bold text-center">Emergency supplies</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Stock up on emergency supplies such as water, non-perishable food,
                                first aid kits, flashlights, and batteries.</p>
                        </div>
                    </div>
                </div>

                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header bg-warning border-success fw-bold text-center">Emergency contacts</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Keep a list of emergency contacts including local authorities,
                                emergency services, and neighbors who can provide assistance.</p>
                        </div>
                    </div>
                </div>

                <div className="col emergencyPlanHover">
                    <div className="card h-100">
                        <div className="card-header bg-warning border-success fw-bold text-center">Practice the plan</div>
                        <div className="card-body cardColor">

                            <p className="card-text">Regularly review and practice your emergency plan with family members,
                                employees, or colleagues to ensure everyone knows what to do in case of an emergency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default About;