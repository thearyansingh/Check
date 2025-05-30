import React from 'react';
import { motion } from 'framer-motion';

const banners = [
  {
    title: 'New Arrivals',
    img: 'https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    btn: 'Discover',
  },
  {
    title: 'Exclusive Deals',
    img: 'https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Season Sale',
    subtitle: 'Up to 70% Off',
    btn: 'Shop Now',
    img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    colSpan: 'sm:col-span-2',
  },
  {
    title: 'Style Refresh',
    subtitle: 'Top Picks This Month',
    btn: 'Explore',
    img: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
    colSpan: 'sm:col-span-2',
  },
  {
    title: 'Flash Offers',
    img: 'https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Limited Edition',
    img: 'https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const MultipleBaner = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {banners.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-xl overflow-hidden aspect-[16/9] shadow-md hover:shadow-xl transition-shadow duration-300 group ${item.colSpan || ''}`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-xl flex flex-col justify-end p-4 text-white text-center">
              <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
              {item.subtitle && <p className="text-sm md:text-base mt-1">{item.subtitle}</p>}
              {item.btn && (
                <button className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300 text-sm md:text-base">
                  {item.btn}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MultipleBaner;
