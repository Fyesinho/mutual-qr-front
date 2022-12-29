import React from 'react';
import './Button.scss';

const Button = ({label, type, variant}) => {
    return (
        <button
            className={`button-${variant}`}
            type={type}
        >{label}</button>
    );
};

export default Button;