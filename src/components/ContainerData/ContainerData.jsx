import React from 'react';
import './ContainerData.scss';

const ContainerData = ({children}) => {
    return (
        <div className='container-data'>
            {children}
        </div>
    );
};

export default ContainerData;