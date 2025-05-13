"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/vision" },
    { name: "Programs", href: "https://daycare.swarananjani.org" },
    { name: "Admission", href: "/admissionform" },
    { name: "Gallery", href: "/photos" },
    { name: "Parent Corner", href: "/testimonials" },
    { name: "Contact Us", href: "/contactus" },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
  ];

  return (
    // <motion.footer
    //   initial={{ opacity: 0, y: 40 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
    //   className="bg-gradient-to-r from-pink-400 via-pink-400 to-pink-300 text-black py-12 px-6  shadow-inner"
    // >
    <div className="bg-gradient-to-r bg-[#ffbfbd] text-black py-12 px-6  shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-extrabold mb-4 text-pink-600">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.15, color: "#f2c7f0", x: 8 }}
                whileTap={{ scale: 0.95, color: "#be185d" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer text-base font-semibold"
              >
                <a
                  href={link.href}
                  className="hover:underline transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-extrabold mb-4 text-pink-600">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {socialMedia.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -10, 10, -10, 0],
                  color: "#f472b6",
                }}
                whileTap={{ scale: 0.9, color: "#be185d" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl cursor-pointer"
                aria-label="Social Media Link"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* School Address */}
        <div>
          <h3 className="text-xl font-extrabold mb-4 text-pink-600">
            School Address
          </h3>
          <address className="not-italic text-gray-800 text-base font-semibold">
           Villa 667
            <br />
          Omaxe city 1 ,
            <br />
            Indore, Madhya Pradesh
          </address>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-extrabold mb-4 text-pink-600">
            Contact Info
          </h3>
          <p className="text-base font-semibold">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline text-blue-800">
             +91 9039024010
            </a>
          </p>
          <p className="text-base font-semibold">
            Email:{" "}
            <a
              href="mailto:info@littlebutton.com"
              className="hover:underline text-blue-800"
            >
              swarananjani.edu@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-gray-700"
      >
        &copy; {new Date().getFullYear()} Little Button. All rights reserved.
      </motion.div>
    </div>
  );
}
