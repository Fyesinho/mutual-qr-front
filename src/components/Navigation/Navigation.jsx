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
            <input accept='image/*' id='icon-button-file' type='file' capture='environment'/>
            <label className='icon-menu' htmlFor="icon-button-file">
                <FontAwesomeIcon icon={faSdCard}/>
                <span>QR</span>
            </label>
        </div>
    );
};

export default Navigation;