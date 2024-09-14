import React from 'react';
import { Link } from 'react-router-dom';
import Fab from './Fab';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { id: 1, place: 'QFX Cinema',province : "Koshi Province" , area: "itahari" ,rating: 4, review: 'Very safe environment!' },
  { id: 2, place: 'ABC Party Palace', province : "Bagmati Province" , area: "Bagbazar" , rating: 3, review: 'Safe but crowded.' },
];

function Home() {
  return (
    <div className="home max-w-5xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">User Reviews</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <li key={review.id} className="bg-white shadow-md rounded-lg p-6">
            <Link to={`/place/${review.id}`}>
              <h3 className="text-xl font-semibold ">{review.place}</h3>
              <h3 className="">{review.province}, {review.area}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    className={index < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
