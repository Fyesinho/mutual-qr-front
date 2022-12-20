import React from 'react';
import './Data.scss';

const Data = ({label, value}) => {
    return (
        <div className='data'>
            <span className='label'>{label}:</span> {value}
        </div>
    );
};

export default Data;