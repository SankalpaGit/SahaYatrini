// src/components/Fab.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

function Fab() {
  return (
    <Link to="/add-review" className="fab">
      <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all fixed bottom-6 right-6 flex items-center justify-center">
        <FaPlus className="text-white" size={24} />
      </button>
    </Link>
  );
}

export default Fab;
