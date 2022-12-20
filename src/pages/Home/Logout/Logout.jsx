import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
    return (
        <div className="logout">
            <div>Salir</div>
            <FontAwesomeIcon icon={faRightFromBracket}/>
        </div>
    );
};

export default Logout;