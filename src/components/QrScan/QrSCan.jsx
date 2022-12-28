import React, {useEffect} from 'react';
import {Html5QrcodeScanner} from "html5-qrcode";
import './QrScan.scss';

const qrcodeRegionId = "html5qr-code-full-region";

const Html5QrcodePlugin = (props) => {
    useEffect(() => {
        const createConfig = (props) => {
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
            if (props.qrCodeSuccessCallback) {
                config.qrCodeSuccessCallback = props.qrCodeSuccessCallback;
            }
            if (props.qrCodeErrorCallback) {
                config.qrCodeErrorCallback = props.qrCodeErrorCallback;
            }
            if (props.verbose) {
                config.verbose = props.verbose;
            }
            return config;
        }

        const config = createConfig(props);
        const verbose = config.verbose === true;
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(config.qrCodeSuccessCallback, config.qrCodeErrorCallback);
        const buttonAccess = document.getElementById('html5-qrcode-button-camera-permission')
        if (buttonAccess) {
            buttonAccess.textContent = 'Acceder a la cámara';
            buttonAccess.className = 'button-access';
        }
        const buttonFile = document.getElementById('html5-qrcode-anchor-scan-type-change')
        if (buttonFile) {
            buttonFile.textContent = 'Subir archivo';
            buttonFile.className = 'button-file';
        }
        return () => {
            html5QrcodeScanner.clear().then(() => {
            })
        }
    // eslint-disable-next-line
    }, [])
    return <div id={qrcodeRegionId}/>
}

export default Html5QrcodePlugin;