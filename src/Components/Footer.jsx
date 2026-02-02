import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
            <footer className="bg-teal-600 text-white py-10 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div>
        <img src="/assets/logo-main.png" alt="SkyPlane" className="h-12 w-36" />
        </div>

       

        {/* Social Media Section */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {/* <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a> */}
            <a href="https://www.instagram.com/flyanzawings?igsh=MTN5ZzR5MGo5eWdj" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
            {/* <a href="#" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a> */}
            <a href="https://wa.me/919625072091" className="p-2 bg-white text-teal-600 rounded-full hover:bg-gray-200">
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
          <li><Link to="privacy-policy" className="hover:underline">Privacy Policy</Link></li>
        </ul>
        <p className="text-white/70">© 2024 Flyanza. All rights reserved.</p>
        <p className="text-white/70">Handcrafted By : <a href="https://www.anfstudio.com/" className="underline hover:text-white">ANF Studio</a></p>
      </div>
    </footer>
    </div>

  );
};

export default Footer;
