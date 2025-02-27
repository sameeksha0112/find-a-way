import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import HospitalTable from './HospitalTable';

const HospitalList = () => {
    return (
        <div>
            <Navigation></Navigation>



    <HospitalTable></HospitalTable>



            <Footer></Footer>
        </div>
    );
};

export default HospitalList;