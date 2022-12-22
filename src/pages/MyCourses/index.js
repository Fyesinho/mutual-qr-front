import React, {useContext} from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import GroupData from "../../components/GroupeData/GroupeData";
import Data from "../../components/Data/Data";
import ContainerData from "../../components/ContainerData/ContainerData";
import Circle from "../../components/Circle/Circle";
import UserContext from "../../context/user/User.context";

const MyCourses = () => {
    const {selectedUser} = useContext(UserContext);
    const name = selectedUser[0] ? selectedUser[0]['Nombre Colaborador'] : ''
    return (
        <div>
            <Header/>
            <Container>
                <Title>
                    Cursos de {name}
                </Title>
                {selectedUser && selectedUser.map((course, index) => {
                    let color;
                    switch (course['Boton']) {
                        case 'btn btn-success':
                            color = 'green';
                            break;
                        case 'btn btn-warning' : {
                            color = 'yellow';
                            break;
                        }
                        default: {
                            color = 'red';
                        }
                    }
                    return <div key={index}>
                        <GroupData>
                            <div style={{width: '80%'}}>
                                {course['Nombre Actividad']}
                            </div>
                            <Circle color={color}/>
                        </GroupData>
                        <ContainerData>
                            <Data label='Ejecutor' value={course['Nombre Ejecutor']}/>
                            <Data label='Empresa' value={course['Nombre Empresa']}/>
                            <Data label='Modalidad' value={course['Modalidad']}/>
                            <Data label='Fecha inicio' value={course['Fecha Inicio Actividad']}/>
                            <Data label='Fecha término' value={course['Fecha Termino Actividad']}/>
                            <Data label='Vigencia' value={course['Fecha Vigencia Actividad']}/>
                            <Data label='Certificado' value={
                                <a target='_blank' rel='noreferrer' href={course['Link Actividad']}>Descargar</a>
                            }/>
                        </ContainerData>
                    </div>
                })}
            </Container>
            <Navigation/>
        </div>
    );
};

export default MyCourses;