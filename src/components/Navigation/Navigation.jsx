import React from 'react';
import {useNavigate} from "react-router-dom";
import './Navigation.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faSdCard, faChevronLeft, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navigation = ({from}) => {
    const navigate = useNavigate();
    return (
        <div className='navigation'>
            {
                from === 'landing' ?
                    <div className='icon-menu' onClick={() => localStorage.removeItem('user')}>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faRightFromBracket}/>
                            <span>Salir</span>
                        </Link>
                    </div> :
                    <div className='icon-menu' onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span>Volver</span>
                    </div>
            }
            <div className='icon-menu'>
                <Link to={'/home'}>
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