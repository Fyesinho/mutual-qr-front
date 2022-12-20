import React, {useEffect} from 'react';
import {Html5QrcodeScanner} from "html5-qrcode";

const qrcodeRegionId = "html5qr-code-full-region";

const Html5QrcodePlugin = (props) => {
    const createConfig = () => {
        const config = {};
        if (props.fps) {
            config.fps = props.fps;
        }
        if (props.qrbox) {
            config.qrbox = props.qrbox;
        }
        if (props.aspectRatio) {
            config.aspectRatio = props.aspectRatio;
        }
        if (props.disableFlip !== undefined) {
            config.disableFlip = props.disableFlip;
        }
        return config;
    }

    useEffect(() => {
        const config = createConfig();
        const verbose = props.verbose === true;

        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }

        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);
    }, [])
    return <div id={qrcodeRegionId}/>
}

export default Html5QrcodePlugin;