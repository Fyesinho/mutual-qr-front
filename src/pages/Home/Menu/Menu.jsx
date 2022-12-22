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
                    <div className='menu'>
                        <div className='tasks'>
                            <div className='task' style={{width: '29%'}}>
                                <a href='https://app.powerbi.com/view?r=eyJrIjoiZGU2NWMzMTgtMWViMi00ZmNhLWEyY2QtNmRmNGU5ZWZjNmMyIiwidCI6IjU3OTUyNTYyLWJhZTItNGI3OS04YWQ0LWUzNzVhM2RjZWQ5NyIsImMiOjR9' target='_blank'>
                                    <div className='count'>
                                        <span><FontAwesomeIcon icon={faChartPie}/></span>
                                    </div>
                                    <div className='title-menu'>Mis paneles</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
    );
};

export default Menu;