import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between w-full h-20 bg-[#1b1b1b] px-16 py-0 flex-wrap">
        {/* Logo */}
        <div className="text-white text-3xl font-semibold flex items-center space-x-2">
          <span className="text-yellow-400">LM</span>
          <span className="text-white">Store</span>
        </div>

        {/* Menu button for mobile */}
        <label
          htmlFor="click"
          className="menu-btn cursor-pointer text-white text-2xl md:hidden"
        >
          <i className="fas fa-bars"></i>
        </label>

        {/* Navbar Links */}
        <ul className="flex flex-wrap list-none transition-all ease duration-300 md:flex md:w-auto md:h-auto md:space-x-8 md:static">
          <li className="m-1">
            <Link
              className="text-[#f2f2f2] text-lg font-medium py-2 px-4 rounded-md transition-all ease duration-300 hover:text-black hover:bg-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="m-1">
            <Link
              className="text-[#f2f2f2] text-lg font-medium py-2 px-4 rounded-md transition-all ease duration-300 hover:text-black hover:bg-white"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="m-1">
            <Link
              className="text-[#f2f2f2] text-lg font-medium py-2 px-4 rounded-md transition-all ease duration-300 hover:text-black hover:bg-white"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className="m-1">
            <Link
              className="text-[#f2f2f2] text-lg font-medium py-2 px-4 rounded-md transition-all ease duration-300 hover:text-black hover:bg-white"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Custom Shopping Cart Icon (PNG Image) */}
        <div className="relative">
          <Link
            to="/products"
            className="text-white text-3xl hover:text-yellow-400 transition duration-300"
          >
            <img
              src="./ecommerce.png" // Provide the correct path to your cart.png
              alt="Cart"
              className="w-12 h-12" // Adjust size if needed
            />
          </Link>
          {/* Cart Item Badge */}
        </div>
      </nav>

      {/* Optional Background Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#1b1b1b] z-[-1] w-full px-8"></div>
    </header>
  );
};

export default Navbar;
