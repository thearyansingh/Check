import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from "./Item";
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
    }
  })
};

const NewCollection = () => {
  const { new_collection } = useContext(Shopcontext);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false}}
        variants={fadeIn}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase font-sans">
          Explore Our New Collection
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-base md:text-lg">
          Elevate your everyday look with curated pieces from our freshest drop — stylish, sustainable, and uniquely you.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6"
      >
        {new_collection.map((product, index) => (
          <motion.div key={product.id} custom={index} variants={fadeIn}>
            <Item product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <button className="inline-block px-6 py-3 bg-gray-900 text-white font-medium text-sm uppercase tracking-wide rounded-lg hover:bg-gray-800 transition duration-300 shadow-md hover:scale-105">
          View All Products
        </button>
      </motion.div>
    </section>
  );
};

export default NewCollection;
