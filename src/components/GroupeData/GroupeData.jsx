import React from 'react';
import './GroupData.scss';

const GroupData = ({children}) => {
    return (
        <div className='group'>
            {children}
        </div>
    );
};

export default GroupData;