import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Shopcontext } from '../Context/ShopContext';
import banner from '../assets/womensbanner1.png';
import Item from '../Components/Item';

const Womens = () => {
  const { all_product } = useContext(Shopcontext);
  const womenProducts = all_product.filter(product => product.category === 'women');

  return (
    <motion.div
      className="md:mt-32 mt-20 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* Banner */}
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 hidden md:block"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={banner}
            alt="Women's Collection Banner"
            className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Products Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-14"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
          Women's Collection
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {womenProducts.map(product => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Item product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Womens;
