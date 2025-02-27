import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import ElectricityDataTable from './ElectricityDataTable';

const ElectricityList = () => {
    return (
        <div>
            <Navigation></Navigation>


        <ElectricityDataTable></ElectricityDataTable>




            <Footer></Footer>
        </div>
    );
};

export default ElectricityList;