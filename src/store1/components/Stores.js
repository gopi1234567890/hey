import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navibar from './Navibar';
import Store1 from './Store1'; // Corrected the filename

const Stores = () => {
  return (
    <div className='main'>
      <Navibar />
      <h1>We are in the Stores page</h1>
      <Routes>
        <Route path="store1" element={<Store1 />} />
        {/* Define other routes for stores if needed */}
      </Routes>
    </div>
  );
};

export default Stores;
