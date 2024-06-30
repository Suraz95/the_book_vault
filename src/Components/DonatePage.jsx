import React from 'react';
import { Link } from 'react-router-dom';
import booksImage from '../assets/Couraselpics/Courasel1.jpg'; // Make sure you have an appropriate image in your assets folder

const BookDonationPage = () => {
  return (
    <div
      className="flex items-center justify-center mb-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url("https://ilm-live.storage.googleapis.com/upload/img_cache/file-1464-1e1ce03c930c2119b08c3c8647d31c74.jpg")`, height: '60vh' }}
    >
      <Link to="https://forms.gle/N9YgMzdZoUvoMCwh8"  className="inline-block py-2 px-4 rounded text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 transition duration-300">
        Donate Now
      </Link>
      
    </div>
  );
};

export default BookDonationPage;
