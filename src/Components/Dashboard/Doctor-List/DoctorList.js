import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import DoctorDataTable from './DoctorDataTable';

const DoctorList = () => {
    return (
        <div>
            <Navigation></Navigation>


 
        <DoctorDataTable></DoctorDataTable>



            <Footer></Footer>
        </div>
    );
};

export default DoctorList;