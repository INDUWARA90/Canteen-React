import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/payment'; 
import Error from './pages/Error';
import CategoryPage from './pages/CategoryPage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
