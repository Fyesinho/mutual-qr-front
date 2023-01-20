import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkSlash} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const Index = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '80px'}}>
                <FontAwesomeIcon color='#9dbd2c' icon={faLinkSlash} size="6x"/>
                <p>Ups! Algo salió mal</p>
                <p>Perdimos la conexión pero volvemos enseguida. Inténtalo nuevamente.</p>
            </div>
            <Navigation/>
        </>
    );
};

export default Index;