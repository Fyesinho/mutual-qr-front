import React, {useContext} from 'react';
import './Header.scss';
import UserContext from "../../context/user/User.context";
import logo from '../../media/img/thumbnail_LOGO-MAS-BORDE-BLANCO.png'

const Header = ({home}) => {
    const {loginUser} = useContext(UserContext);
    const firstData = loginUser[0];
    const name = firstData ? firstData['Nombre Colaborador'] : ''
    return (
        home ?
            <div className='header'>
                <img src={logo} alt='logo-mutual' />
            </div>
            :
            <div className='header'>
                <h1>Bienvenido</h1>
                <h2>{name}</h2>
            </div>
    );
};

export default Header;