import React from 'react';
import {useNavigate} from "react-router-dom";
import './Navigation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faSdCard, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className='navigation'>
            <div className='icon-menu' onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <span>Volver</span>
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