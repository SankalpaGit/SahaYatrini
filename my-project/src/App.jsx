// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddReview from './components/AddReview';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<AddReview />} />
      </Routes>
     
      
    </Router>
  );
}

export default App;
