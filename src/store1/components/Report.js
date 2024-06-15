import React, { useState } from 'react';
import Navibar from './Navibar';
import Order from './Order';


const Report = () => {
  const [d,setd]=useState('');
  const passdata= (data)=>{
        setd(data);
  };
  return (
    <div className='main'>
        <h1> we are in report page </h1>  
       
    
    </div>
  );
};

export default Report;
