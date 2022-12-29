import React, {useContext} from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import Data from "../../components/Data/Data";
import UserContext from "../../context/user/User.context";
import withAuth from "../../hooks/withAuth";

const PersonalData = () => {
    const {selectedUser} = useContext(UserContext);
    const firstData = selectedUser[0];
    const name = firstData ? firstData['Nombre Colaborador'] : ''
    const rut = firstData ? firstData['Rut Colaborador'] : ''
    return (
        <div>
            <Header/>
            <Container>
                <Title>
                    Datos personales
                </Title>
                <div>
                    <Data label='Nombre' value={name} />
                    <Data label='Rut' value={rut} />
                </div>
            </Container>
            <Navigation/>
        </div>
    );
};

export default withAuth(PersonalData);