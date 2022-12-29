import React from 'react';
import {Navigate} from 'react-router-dom';

const withAuth = (Component) => (props) => {
    if(!localStorage.getItem('user')) {
        return <Navigate to='/' />
    }
    return (
        <Component
            {...props}
        />
    );

};

export default withAuth;