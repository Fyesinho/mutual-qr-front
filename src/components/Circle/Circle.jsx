import React from 'react';

const Circle = ({color}) => {
    return (
        <div style={{background: color, height: '35px', width: '35px', borderRadius: '17px', border: '1px black solid'}}/>
    );
};

export default Circle;