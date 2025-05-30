import React, { useContext, useState } from 'react';
import Logo from '../../assets/ayx.png';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from '../ResponsiveMenu';
import { Shopcontext } from '../../Context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartItems } = useContext(Shopcontext);

  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      
      className="bg-black/50 fixed top-0 w-full z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-1  flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link to="/">
            <img src={Logo} alt="AYX Logo" className="w-14 md:w-20" />
          </Link>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-red-300 tracking-widest"
          >
            AYX
          </motion.h1>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex gap-8 text-lg font-semibold text-white">
            {['Home', 'Mens', 'Womens', 'Kids'].map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="hover:text-red-500 transition duration-200 ease-in-out"
              >
                <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}>
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="md:hidden"
          >
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="w-7 h-7 cursor-pointer  text-white" />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="w-7 h-7 cursor-pointer  text-white" />
            )}
          </motion.div>

          {/* Desktop Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/login">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition duration-300">
                  Login
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-gray-100" />
                <AnimatePresence>
                  {getTotalCartItems() > 0 && (
                    <motion.span
                      key="cart-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {getTotalCartItems()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
