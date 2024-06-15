import React, { useState } from 'react';

import Order from './Order';
import Report from './Report';
import Stores from './Stores';
import { Route, Routes } from 'react-router-dom';
import Navibar from './Navibar';

const Store1 = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponent1Click = () => {
    setSelectedComponent('Component1');
  };

  const handleComponent2Click = () => {
    setSelectedComponent('Component2');
  };

  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="stores" element={<Stores />} />
        {/* Define other routes for stores if needed */}
      </Routes>
    <h1> we are in store 1 </h1>
      <button onClick={handleComponent1Click}>order</button>
      <button onClick={handleComponent2Click}>report </button>
      {selectedComponent === 'Component1' && <Order  />}
      {selectedComponent === 'Component2' && <Report />} 
    </div>
  );
};

export default Store1;
