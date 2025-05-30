import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import banner from '../assets/kidsbanner1.png'
import Item from '../Components/Item'
import { motion } from 'framer-motion'

const Kids = () => {
  const { all_product } = useContext(Shopcontext)
  const kidProducts = all_product.filter((product) => product.category === "kid")

  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>

      {/* Animated Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={banner} className="w-full px-6 rounded-2xl shadow-md" alt="Kids Banner" />
      </motion.div>

      {/* Product Section */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <motion.h2
          className='text-3xl font-bold tracking-tight text-gray-900 text-center md:text-start'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Kids' Collection
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            kidProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Item product={product} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Kids
