import React from 'react';
import './Input.scss';

const Input = ({id, type, label, placeholder}) => {
    return (
        <>
            <label className='label-input' htmlFor={id}>{label}</label>
            <input className='input-text' placeholder={placeholder} id={id} name={id} type={type} />
        </>
    );
};

export default Input;