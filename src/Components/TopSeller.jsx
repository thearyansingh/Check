import React, { useContext } from 'react';
import { Shopcontext } from '../Context/ShopContext';
import Item from './Item';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const TopSeller = () => {
  const { all_product } = useContext(Shopcontext);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-serif uppercase"
          >
            Top Sellers
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Handpicked best-sellers loved by our community. Don’t miss out on these must-have pieces.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
        >
          {all_product.slice(0, 20).map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Item product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopSeller;
