import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './store1/components/Login';
import Stores from './store1/components/Stores';
import Navibar from './store1/components/Navibar';
import Store1 from './store1/components/Store1'; // Corrected the filename

const App = () => {
  const [d, setd] = useState('');

  const passdata = (data) => {
    setd(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login passdata={passdata} />} />
        <Route path="/stores/*" element={<Stores />}>
          {/* Render Store1 outside of the Stores component */}
        </Route>
        <Route path="/store1" element={<Store1 />} /> {/* New route for Store1 */}
      </Routes>
    </Router>
  );
};
export default App;
