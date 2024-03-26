import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi"



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center mb-2">
              <MdEmail className="h-6 w-6 mr-2" />
              <p>contact@example.com</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="h-6 w-6 mr-2" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <HiLocationMarker className="h-6 w-6 mr-2" />
              <p>123 Street Name, City, Country</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-2">
              < FaLinkedin className="h-6 w-6" />
              < FaGithub className="h-6 w-6" />
              < FaFacebook className="h-6 w-6" />
            </div>
            <p>Stay connected with us on social media!</p>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-8">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
