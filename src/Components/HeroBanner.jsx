import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner1.jpeg';

const HeroBanner = () => {
  return (
    <section className="relative lg:pt-0 pt-0 overflow-hidden">
      <div
        className="relative bg-cover bg-center h-[520px] md:h-[640px] lg:h-[720px] shadow-xl rounded-none  mx-auto "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            className="text-center text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight uppercase tracking-wide drop-shadow-lg">
              Redefine Your Wardrobe
            </h1>
            <p className="text-lg md:text-2xl mt-4 mb-8 text-gray-200 font-medium">
              Elevate your everyday style with bold fits & timeless classics.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: false }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Explore Collection
              </button>
              <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
