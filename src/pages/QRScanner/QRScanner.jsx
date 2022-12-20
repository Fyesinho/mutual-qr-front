import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Html5QrcodePlugin from "../../components/QrScan/QrSCan";

const QrScanner = ({user}) => {
    const [rut, setRut] = useState('')
    const onSuccess = (decodedText) => {
        setRut(decodedText)
    }

    return (
        <div>
            <Header user={user} />
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onSuccess}
            />
            <div>{rut}</div>
            <Navigation />
        </div>
    );
};

export default QrScanner;