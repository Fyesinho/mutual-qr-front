import React, {useContext, useState} from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Html5QrcodePlugin from "../../components/QrScan/QrSCan";
import UserContext from "../../context/user/User.context";

const QrScanner = () => {
    const {updateUserId} = useContext(UserContext);
    const [success, setSuccess] = useState(false);

    const onSuccess = (decodedText) => {
        setSuccess(true);
        return updateUserId(decodedText)
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
                    <span>El rut fue escaneado exitosamente.</span>
                    <button>Volver</button>
                </div>
            }
            <Navigation/>
        </div>
    );
};

export default QrScanner;