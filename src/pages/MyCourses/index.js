import React from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import GroupData from "../../components/GroupeData/GroupeData";
import Data from "../../components/Data/Data";
import ContainerData from "../../components/ContainerData/ContainerData";
import Circle from "../../components/Circle/Circle";

const MyCourses = ({user}) => {
    return (
        <div>
            <Header user={user}/>
            <Container>
                <Title>
                    Mis cursos
                </Title>
                {user && user.map((course, index) => {
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
                            <Data label='Estado'
                                  value={course['Boton'].includes('success') ? 'Completado' : 'No completado'}/>
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