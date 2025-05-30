import React from 'react';
import banner from '../assets/mid.webp';

const MidBanner = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div
        className="relative max-w-7xl mx-auto h-[450px] md:h-[550px] bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Explore Our New Collection of 2025
            </h1>
            <p className="text-base md:text-lg mb-5">
              Discover timeless styles and enjoy <span className="text-yellow-300 font-semibold">20% OFF</span> today!
            </p>
            <button className="bg-white text-black font-medium py-2 px-5 rounded-full hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidBanner;
