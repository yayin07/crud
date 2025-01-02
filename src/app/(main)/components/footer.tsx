import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">MyBook</h1>
            <p className="text-sm mt-2 text-white opacity-80">
              Empowering your business with modern solutions. Let’s grow
              together.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2 text-sm opacity-80">
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Resources</h2>
              <ul className="mt-2 space-y-2 text-sm opacity-80">
                <li>
                  <a href="#blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-blue-500 hover:bg-opacity-90"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-blue-500 hover:bg-opacity-90"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-pink-500 hover:bg-opacity-90"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-blue-500 hover:bg-opacity-90"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center text-sm opacity-80">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
