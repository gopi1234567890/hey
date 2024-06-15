// Left.js
import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';

const Left = ({pass}) => {
    const [datafromchild, setDatafromchild] = useState('none');

    const handleDataFromChild = (data) => {
        setDatafromchild(data);
        pass(data);
    };


    return (
        <div className="component">
            <h2>Component 1</h2>
            <p>This is the content of the first component.</p>
            <BarcodeScanner senddatatoparent={handleDataFromChild} />
        </div>
    );
};

export default Left;
