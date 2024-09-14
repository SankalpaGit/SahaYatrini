import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function AddReview() {
  const [province, setProvince] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [place, setPlace] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState('');

  // Sample data for municipalities by province
  const municipalitiesByProvince = {
    'Koshi': ['Biratnagar', 'Dharan', 'Ilam'],
    'Madhesh': ['Janakpur', 'Birgunj', 'Rajbiraj'],
    'Bagmati': ['Kathmandu', 'Lalitpur', 'Bhaktapur'],
    'Gandaki': ['Pokhara', 'Gorkha', 'Baglung'],
    'Lumbini': ['Butwal', 'Bhairahawa', 'Nepalgunj'],
    'Karnali': ['Surkhet', 'Jumla', 'Dailekh'],
    'Sudurpashchim': ['Dhangadhi', 'Dadeldhura', 'Mahendranagar'],
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setMunicipality('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ province, municipality, place, rating, review });
    // Handle submission to backend here
  };

  return (
    <div className="add-review max-w-3xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a Review</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Province */}
        <div>
          <label className="block text-lg font-semibold mb-2">Province</label>
          <select
            value={province}
            onChange={handleProvinceChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">Select a Province</option>
            {Object.keys(municipalitiesByProvince).map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        {/* Municipality */}
        <div>
          <label className="block text-lg font-semibold mb-2">Municipality</label>
          <select
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            disabled={!province}
          >
            <option value="">Select a Municipality</option>
            {province &&
              municipalitiesByProvince[province].map((muni) => (
                <option key={muni} value={muni}>
                  {muni}
                </option>
              ))}
          </select>
        </div>

        {/* Place */}
        <div>
          <label className="block text-lg font-semibold mb-2">Place</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Enter place (e.g., QFX Cinema)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-lg font-semibold mb-2">Rating</label>
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    className="hidden"
                  />
                  <FaStar
                    size={30}
                    className={
                      ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Review */}
        <div>
          <label className="block text-lg font-semibold mb-2">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
