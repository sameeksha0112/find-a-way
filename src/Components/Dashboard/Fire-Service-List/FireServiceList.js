import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import FireServiceTable from './FireServiceTable';

const FireServiceList = () => {
    return (
        <div>
            <Navigation></Navigation>


        <FireServiceTable></FireServiceTable>




            <Footer></Footer>
        </div>
    );
};

export default FireServiceList;