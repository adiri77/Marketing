import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
