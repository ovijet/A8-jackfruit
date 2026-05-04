import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-3">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo + About */}
        <aside className="space-y-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/sunLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="object-cover"
            />
            <h3 className="font-bold text-2xl">
              S<span className="text-orange-500">un</span>Cart
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Your one-stop shop for all summer essentials. Stay cool and stylish!
          </p>
        </aside>

        {/* Contact */}
        <nav className="space-y-2">
          <h6 className="font-semibold text-lg">Contact info</h6>
          <p className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer transition">
            Email: info@suncart.com
          </p>
          <p className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer transition">
            Phone: +880 1234-567890
          </p>
          <p className="text-sm text-gray-500">Address: Dhaka, Bangladesh</p>
        </nav>

        {/* Links */}
        <nav className="space-y-2">
          <h6 className="font-semibold text-lg">Privacy Policy</h6>
          <p className="text-sm hover:text-orange-500 cursor-pointer transition">
            Terms of Service
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer transition">
            Privacy Policy
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer transition">
            Cookie Policy
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer transition">
            Press Kit
          </p>
        </nav>

        {/* Social */}
        <nav className="space-y-3">
          <h6 className="font-semibold text-lg">Social link </h6>
          <div className="flex gap-4 text-xl">
            <a className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a className="hover:text-sky-500 transition">
              <FaTwitter />
            </a>
            <a className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
