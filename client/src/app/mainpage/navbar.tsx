"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Our Vision & Mission", href: "/about/vision-mission" },
      { name: "Principal's Message", href: "/about/principal-message" },
      { name: "Our Team", href: "/about/team" },
    ],
  },
  {
    name: "Programs",
    dropdown: [
      { name: "Playgroup", href: "/programs/playgroup" },
      { name: "Nursery", href: "/programs/nursery" },
      { name: "Kindergarten", href: "/programs/kindergarten" },
      { name: "Daycare", href: "/programs/daycare" },
    ],
  },
  {
    name: "Admission",
    dropdown: [
      { name: "Admission Process", href: "/admission/process" },
      { name: "Fee Structure", href: "/admission/fee-structure" },
      { name: "Download Prospectus", href: "/admission/prospectus" },
    ],
  },
  {
    name: "Gallery",
    dropdown: [
      { name: "Photos", href: "/gallery/photos" },
      { name: "Videos", href: "/gallery/videos" },
      { name: "Event Highlight", href: "/gallery/events" },
    ],
  },
  {
    name: "Parent Corner",
    dropdown: [
      { name: "Testimonial", href: "/parent-corner/testimonial" },
      { name: "Parent Resource", href: "/parent-corner/resource" },
      { name: "FAQ", href: "/parent-corner/faq" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Soft, playful gradient for kids
  const navBg = "bg-gradient-to-r from-pink-400 via-pink-200 to-blue-100";
  const navText = "text-blue-900";

  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={`${navBg} shadow-md sticky top-0 z-50 rounded-full`}>
  <div className="max-w-6xl mx-auto flex items-center justify-between px-1 py-1">
        {/* Logo and School Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/image/logo.png"
            alt="Little Button Logo"
            width={55}
            height={55}
            className=""
          />
          <span className="text-lg font-bold tracking-wide text-[#53575C] select-none">
            Little Buttons School
          </span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded-md text-blue-900 hover:bg-pink-100 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Nav links */}
        <ul
          className={`flex-col md:flex-row md:flex items-center gap-2 md:gap-4 absolute md:static top-full left-0 w-full md:w-auto
            ${navBg} md:bg-transparent transition-all duration-300 z-40
            ${mobileMenuOpen ? "flex" : "hidden"}`}
        >
          {navLinks.map((link) =>
            !link.dropdown ? (
              <li key={link.name} className="w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, color: "#db2777" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350 }}
                  className="inline-block"
                >
                  <Link
                    href={link.href!}
                    className={`block px-3 py-2 font-medium ${navText} hover:text-pink-700 transition-colors text-sm relative nav-underline`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ) : (
              <li key={link.name} className="relative w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, color: "#db2777" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350 }}
                  className="inline-block"
                >
                  <button
                    onClick={() => handleDropdown(link.name)}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`block px-3 py-2 font-medium ${navText} hover:text-pink-700 transition-colors text-sm relative nav-underline`}
                  >
                    {link.name}
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="ml-1 inline"
                    >
                      <path d="M4 7l3 3 3-3" />
                    </svg>
                  </button>
                </motion.div>
                {/* Dropdown */}
                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="md:absolute left-0 mt-2 w-full md:w-56 bg-white rounded-xl shadow-lg border border-pink-100 z-50"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <motion.div
                            whileHover={{ scale: 1.04, color: "#db2777" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-block w-full"
                          >
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm text-blue-900 hover:text-pink-700 transition-colors nav-underline"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Animated underline CSS */}
      <style jsx global>{`
        .nav-underline {
          position: relative;
        }
        .nav-underline::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0;
          bottom: -2px;
          background: #db2777;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .nav-underline:hover::after,
        .nav-underline:focus::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
}
