// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddReview from './components/AddReview';
import Header from './components/Header';
import Footer from './components/Footer';
import Fab from './components/Fab'; // Don't forget to import Fab

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<AddReview />} />
      </Routes>
      <Fab /> {/* Add the Fab button here */}
      <Footer />
    </Router>
  );
}

export default App;
