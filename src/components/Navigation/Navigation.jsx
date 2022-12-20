import React from 'react';
import './Navigation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList, faHouse, faSdCard} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='icon-menu'>
                <FontAwesomeIcon icon={faClipboardList}/>
                <span>Asignadas</span>
            </div>

            <div className='icon-menu'>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faHouse}/>
                    <span>Inicio</span>
                </Link>
            </div>
            <div className='icon-menu'>
                <Link to={'/qr'}>
                    <FontAwesomeIcon icon={faSdCard}/>
                    <span>QR</span>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;