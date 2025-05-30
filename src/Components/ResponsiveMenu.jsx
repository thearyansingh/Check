import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          key="menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="fixed top-16 right-0 bottom-0 z-20 h-screen w-[75%] flex flex-col justify-between bg-black/90 px-8 pb-6 pt-16 text-white md:hidden rounded-l-xl shadow-md"
        >
          {/* Top Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-start gap-3"
            >
              <FaUserCircle size={50} />
              <div>
                <h1>Hello User</h1>
                <p className="text-sm text-slate-500">Premium user</p>
              </div>
            </motion.div>

            <nav className="mt-12">
              <ul className="flex flex-col space-y-4 text-xl">
                {['Home', 'Mens', 'Womens', 'Kids'].map((label, i) => (
                  <motion.li
                    key={label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="hover:text-red-400 transition"
                  >
                    <Link to={`/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`}>
                      {label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  custom={5}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to="/login">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                    >
                      Login
                    </motion.button>
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </div>

          {/* Bottom Credit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-slate-400"
          >
            Made by Ayush Kaushik
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
