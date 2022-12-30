import React, {useContext} from 'react';
import './Menu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFileSignature,
    faAddressBook,
    faGraduationCap,
    faMedal,
    faChartPie
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import UserContext from "../../../context/user/User.context";
import Container from "../../../components/Container/Container";

const Menu = () => {
    const {selectedUser, loadingSelectedUser} = useContext(UserContext);
    const name = selectedUser[0] ? selectedUser[0]['Nombre Colaborador'] : ''
    return (
        loadingSelectedUser ?
            null :
            <Container>
                <div className='menu'>
                    <h2>
                        <FontAwesomeIcon icon={faFileSignature}/>
                        <span style={{marginLeft: 10}}>Información personal de {name}</span>
                    </h2>
                    <div className='tasks'>
                        <div className='task'>
                            <Link to='/personal-data'>
                                <div className='count'>
                                    <span><FontAwesomeIcon icon={faAddressBook}/></span>
                                </div>
                                <div className='title-menu'>Datos personales</div>
                            </Link>
                        </div>
                        <div className='task'>
                            <Link to='/my-courses'>
                                <div className='count'>
                                    <span><FontAwesomeIcon icon={faGraduationCap}/></span>
                                    <span>{selectedUser.length}</span>
                                </div>
                                <div className='title-menu'>Cursos</div>
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
                <div className='menu'>
                    <h2>
                        <FontAwesomeIcon icon={faFileSignature}/>
                        <span style={{marginLeft: 10}}>Analítica</span>
                    </h2>
                    <div className='tasks'>
                        <div className='task' id='my-panels'>
                            <Link to='/my-panels'>
                                <div className='count'>
                                    <span><FontAwesomeIcon icon={faChartPie}/></span>
                                </div>
                                <div className='title-menu'>Mis paneles</div>
                            </Link>
                        </div>
                        <div className='task' style={{opacity: 0}}>
                        </div>
                        <div className='task' style={{opacity: 0}}>
                        </div>
                    </div>
                </div>

            </Container>
    );
};

export default Menu;