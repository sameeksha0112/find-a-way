import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import AmbulanceTable from './AmbulanceTable';

const AmbulanceList = () => {
    return (
        <div>
            <Navigation></Navigation>



        <AmbulanceTable></AmbulanceTable>



            <Footer></Footer>
        </div>
    );
};

export default AmbulanceList;