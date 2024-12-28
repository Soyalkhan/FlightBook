import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="pl-10 pr-10 pb-10">
            <footer className="bg-teal-600 text-white py-10 px-6 rounded-[30px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div>
        <img src="/assets/logo-main.png" alt="SkyPlane" className="h-12 w-36" />
        </div>

       

        {/* Social Media Section */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-white/50" />

      {/* Bottom Links Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between  text-sm">
        <ul className="space-y-2 md:space-y-0 md:flex md:space-x-6 mb-4 md:mb-0">
          <li><Link to="termsandconditions" className="hover:underline">Terms and Services</Link></li>
          <li><Link to="refundandcancallations" className="hover:underline">Refund and Cancellation</Link></li>
          <li><Link to="faq" className="hover:underline">FAQ</Link></li>
          <li><Link to="data-policy" className="hover:underline">Data Policy</Link></li>
        </ul>
        <p className="text-white/70">© 2024 Flyanza. All rights reserved.</p>
      </div>
    </footer>
    </div>

  );
};

export default Footer;
