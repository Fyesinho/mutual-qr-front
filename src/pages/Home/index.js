import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "./Menu/Menu";
import Logout from "./Logout/Logout";
import Navigation from "../../components/Navigation/Navigation";
import Loading from "../../components/Loading/Loading";

const Landing = ({user, loading}) => {

    return (
        <>
            <Header user={user}/>
            <Menu user={user}/>
            {false && <Logout/>}
            <Navigation/>
        </>
    );
};

export default Landing;