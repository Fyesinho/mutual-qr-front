import React from 'react';
import './Menu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFileSignature,
    faAddressBook,
    faGraduationCap,
    faMedal
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Menu = ({user}) => {
    return (
        <div className='menu'>
            <h2>
                <span>Información personal</span>
                <FontAwesomeIcon icon={faFileSignature}/>
            </h2>
            <div className='tasks'>
                <div className='task'>
                    <Link to='personal-data'>
                        <div className='count'>
                            <span><FontAwesomeIcon icon={faAddressBook}/></span>
                        </div>
                        <div className='title-menu'>Datos personales</div>
                    </Link>
                </div>
                <div className='task'>
                    <Link to='my-courses'>
                        <div className='count'>
                            <span><FontAwesomeIcon icon={faGraduationCap}/></span>
                            <span>{user.length}</span>
                        </div>
                        <div className='title-menu'>Mis cursos</div>
                    </Link>
                </div>
                <div className='task'>
                    <div className='count'>
                        <span><FontAwesomeIcon icon={faMedal}/></span>
                        <span>-</span>
                    </div>
                    <div className='title-menu'>Experiencia</div>
                </div>
            </div>
        </div>
    );
};

export default Menu;