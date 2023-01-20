import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSlash} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const Index = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '80px'}}>
                <FontAwesomeIcon color='#9dbd2c' icon={faUserSlash} size="6x"/>
                <p>¡Lo sentimos!</p>
                <p>No encontramos al colaborador</p>
            </div>
            <Navigation/>
        </>
    );
};

export default Index;