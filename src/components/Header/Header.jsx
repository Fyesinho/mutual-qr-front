import React, {useContext} from 'react';
import './Header.scss';
import UserContext from "../../context/user/User.context";

const Header = () => {
    const {loginUser} = useContext(UserContext);
    const firstData = loginUser[0];
    const name = firstData ? firstData['Nombre Colaborador'] : ''
    return (
        <div className='header'>
            <h1>Bienvenido</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default Header;