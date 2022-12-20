import React from 'react';
import './Header.scss';

const Header = ({user}) => {
    const firstData = user[0];
    const name = firstData ? firstData['Nombre Colaborador'] : ''
    return (
        <div className='header'>
            <h1>Bienvenido</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default Header;