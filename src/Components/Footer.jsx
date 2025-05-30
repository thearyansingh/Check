import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ayx.png';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Info */}
        <div>
          <Link to="/">
            <img src={Logo} alt="AYX Logo" className="w-28 mb-4" />
          </Link>
          <p className="text-sm mb-2">High-quality, sustainable clothing at affordable prices.</p>
          <p className="text-sm">123 Fashion Street, Select City Walk, Gurugram</p>
          <p className="text-sm mt-1">Email: <a href="mailto:kaushik.ak8171@gmail.com" className="text-red-400 hover:underline">kaushik.ak8171@gmail.com</a></p>
          <p className="text-sm">Phone: +91 8273986787</p>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            {['Contact Us', 'Shipping & Returns', 'FAQs', 'Order Tracking', 'Size Guide'].map((item, i) => (
              <li key={i}>
                <Link to="#" className="hover:text-red-400 transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitterSquare /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaPinterest /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay in the Loop</h3>
          <p className="text-sm mb-4">Get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md sm:rounded-r-none bg-zinc-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-0 bg-red-600 text-white px-5 py-3 rounded-md sm:rounded-l-none hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs sm:text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-red-500 font-semibold">AYX</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
