import React, { useState } from 'react';
import Left from './Left';
import Right from './Right';

const Order = () => {
  const [d,setd]=useState('');
  const passdata= (data)=>{
        setd(data);
  };
  return (
    <div className='main'>

      <h1>maine </h1>
      <div className='child'>
        <div className='left'>
          <Left  pass= {passdata}> </Left>
        </div>
        <div className='right' >
          <Right   da={d} ></Right>
        </div> 
      
     </div> 
    </div>
  );
};

export default Order;
