import React, { useState } from "react";
import { FaQuestionCircle, FaPlane, FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center ml-8">
            <Link to="/">
              <img
                src="/assets/logo-main.png"
                alt="SkyPlane"
                className="h-10 w-32"
              />
            </Link>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* <Link to="/hotels" className="text-gray-600">
              <div className="flex items-center space-x-2">
                <FaHotel className="text-lg text-gray-600" />
                <span className="text-gray-600">Hotels</span>
              </div>
            </Link> */}
            <Link to="/">
              {/* <div className="flex items-center space-x-2">
                <FaPlane className="text-lg text-gray-600" />
                <span className="text-gray-600">Flights</span>
              </div> */}
            </Link>
            <Link to="/contact-us">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700">
                CONNECT
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg
                className="h-8 w-8 text-[#009488] mr-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="flex items-center space-x-2">
            <Link to="/hotels">
              <FaHotel className="text-xl text-white" />
              <span className="text-white text-lg">Hotels</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaPlane className="text-xl text-white" />
            <span className="text-white text-lg">Flights</span>
          </div>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
