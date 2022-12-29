import React, {useContext, useState} from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Html5QrcodePlugin from "../../components/QrScan/QrSCan";
import UserContext from "../../context/user/User.context";
import Fn from "../../const/utils";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import withAuth from "../../hooks/withAuth";

const QrScanner = () => {
    const navigate = useNavigate();
    const {updateUserId} = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [rut, setRut] = useState(false);

    const onSuccess = (decodedText) => {
        setRut(decodedText)
        if(Fn.validaRut(decodedText)) {
            setSuccess(true);
            setFailure(false);
            navigate('/home');
            return updateUserId(decodedText);
        } else {
            setSuccess(false);
            setFailure(true);
        }
    }

    return (
        <div>
            <Header/>
            <Html5QrcodePlugin
                fps={10}
                qrbox={200}
                disableFlip={false}
                qrCodeSuccessCallback={onSuccess}
            />
            {
                success &&
                <div>
                    <span>El rut {rut} fue escaneado exitosamente.</span>
                    <Link to='/home'>Volver</Link>
                </div>
            }
            {
                failure &&
                <div>
                    <span>El texto escaneado "{rut}" no es un Rut.</span>
                </div>
            }
            <Navigation/>
        </div>
    );
};

export default withAuth(QrScanner);