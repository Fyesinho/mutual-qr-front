import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

const Qrscan = () => {

    const [data, setData] = useState('No result');
    const [legacyMode, setLegacyMode] = useState(false);
    const [facingMode, setFacingMode] = useState('user');

    const handleError = (err) => {
        setLegacyMode(true);
    }

    const choiceButton = () => {
        if (facingMode === "environment") {
            setFacingMode("user");
        } else {
            setFacingMode("environment")
        }
    }

    return (
        <div>
            <QrReader
                onError={handleError}
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        // console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
            <input type="button" value="Cambiar de cámara" onClick={choiceButton}/>
            {
                legacyMode ?
                    (<input type="button" value="Adjuntar QR" onClick={() => this.openImageDialog()}/>) : ('')
            }
            <p>{data}</p>
            <p>{facingMode}</p>
        </div>
    );
}

export default Qrscan;