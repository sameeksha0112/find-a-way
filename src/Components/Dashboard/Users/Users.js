import React from 'react';
import Navigation from '../../NavigationBar/Navigation';
import Footer from '../../Footer/Footer';
import UsersTableList from './UsersTableList';

const Users = () => {
    return (
        <div>
            <Navigation></Navigation>
            <UsersTableList></UsersTableList>
            <Footer></Footer>
            
        </div>
    );
};

export default Users;