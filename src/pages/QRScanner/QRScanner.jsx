import React from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Html5QrcodePlugin from "../../components/QrScan/QrSCan";

const QrScanner = ({user}) => {
    const onSuccess = (decodedText, decodedResult) => {
        console.log(decodedText)
        console.log(decodedResult)
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
            <Navigation />
        </div>
    );
};

export default QrScanner;