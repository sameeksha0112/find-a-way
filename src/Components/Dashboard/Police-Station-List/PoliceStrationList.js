import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import PoliceTable from './PoliceTable';

const PoliceStrationList = () => {
    return (
        <div>
            <Navigation></Navigation>



        <PoliceTable></PoliceTable>



            <Footer></Footer>
        </div>
    );
};

export default PoliceStrationList;