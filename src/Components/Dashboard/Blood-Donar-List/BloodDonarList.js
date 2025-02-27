import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import BloodDonarTable from './BloodDonarTable';

const BloodDonarList = () => {
    return (
        <div>
            <Navigation></Navigation>



        <BloodDonarTable></BloodDonarTable>



            <Footer></Footer>
        </div>
    );
};

export default BloodDonarList;