import React, { useState, useRef, useEffect, useCallback } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ senddatatoparent }) => {
    const [scannedCode, setScannedCode] = useState('');
    const [cameraStarted, setCameraStarted] = useState(false);
    const videoRef = useRef(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            setCameraStarted(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
        setCameraStarted(false);
        setScannedCode('');
        
    };  
    const handleDetectedBarcode = useCallback((data) => {
        setScannedCode(data.codeResult.code);
    }, [senddatatoparent]);
       

    useEffect(() => {
        if (cameraStarted) {
            Quagga.init({
                inputStream: {
                    name: 'Live',
                    type: 'LiveStream',
                    target: videoRef.current,
                    constraints: {
                        facingMode: 'environment'
                    }
                },
                decoder: {
                    readers: ['ean_reader']
                }
            }, (err) => {
                if (err) {
                    console.error('Error initializing Quagga:', err);
                    return;
                }
                Quagga.start();
            });
    
            Quagga.onDetected(handleDetectedBarcode);
        } else if (Quagga.initialized) { // Check if Quagga is initialized before stopping
            Quagga.stop();
        }
    
        return () => {
            if (Quagga.initialized) { // Check if Quagga is initialized before stopping
                Quagga.stop();
            }
        };
    }, [cameraStarted, handleDetectedBarcode]);
    
    
    return (
        <div>
            <video ref={videoRef} className="video" autoPlay={true} playsInline={true}></video>
            <p>Scanned Code: {scannedCode}</p>
            {cameraStarted ? (
                <button onClick={stopCamera}>Stop Camera</button>
            ) : (
                <button onClick={startCamera}>Start Camera</button>
            )}
        </div>
    );
};

export default BarcodeScanner;
