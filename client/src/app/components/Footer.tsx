"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            About Daycare
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We are committed to nurturing the growth and learning of young minds
            in a safe, engaging, and fun environment. Join our family and give
            your child the best start.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-yellow-400">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-yellow-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 1234 Learning Lane, Kolkata, IN</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 hello@daycare.com</li>
            <li>🕒 Mon - Fri: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Daycare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
