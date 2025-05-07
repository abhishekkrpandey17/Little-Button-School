"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  {
    title: "About Us",
    items: [
      { label: "Our Vision & Mission", href: "/vision" },
      { label: "Principal's Message", href: "/principal" },
      { label: "Our Team", href: "/teampage" },
    ],
  },
  {
    title: "Programs",
    items: [
      { label: "Playgroup", href: "/programs/playgroup" },
      { label: "Nursery", href: "/programs/nursery" },
      { label: "Kindergarten", href: "/programs/kindergarten" },
      { label: "Daycare", href: "/programs/daycare" },
    ],
  },
  {
    title: "Admission",
    items: [
      { label: "Admission Process", href: "/admission/process" },
      { label: "Fee Structure", href: "/admission/fee" },
      { label: "Download Prospectus", href: "/admission/prospectus" },
    ],
  },
  {
    title: "Gallery",
    items: [{ label: "Photos", href: "/photos" }],
  },
  {
    title: "Parent Corner",
    items: [
      { label: "Testimonials", href: "/components/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > prevScrollY && currentScrollY > 80);
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-pink-300 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-10 w-10 rounded-full"
          />
          <span className="text-[3vmin] font-bold text-[#ff69b4]">
            Little Buttons School
          </span>
        </Link>

        <div className="md:hidden">
          <Menu onClick={() => setOpenMenu(!openMenu)} className="text-pink-600" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-[2.4vmin] font-medium">
          <Link href="/" className="hover-underline-animation text-[#2563eb] hover:text-[#e11d48]">
            Home
          </Link>

          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setDropdown(item.title)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center text-sky-700 hover-underline-animation">
                {item.title}
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {dropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-52 bg-white shadow-xl rounded-lg p-2 space-y-1 z-50 border border-pink-100"
                  >
                    {item.items.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                        className="block px-4 py-2 text-gray-700 rounded hover:bg-[#fce7f3] hover:text-[#db2777] transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="/contactus"
            className="hover-underline-animation text-[#2563eb] hover:text-[#e11d48]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden px-4 py-3 bg-white shadow-inner text-sm"
          >
            <Link href="/" className="block py-2 text-pink-600 font-semibold">
              Home
            </Link>
            {navItems.map((nav) => (
              <details key={nav.title} className="group mb-2">
                <summary className="cursor-pointer py-2 text-pink-600 font-semibold">
                  {nav.title}
                </summary>
                <div className="ml-4 space-y-1">
                  {nav.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-1 text-gray-600 hover:text-pink-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link href="/contactus" className="block py-2 text-pink-600 font-semibold">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hover-underline-animation {
          position: relative;
        }

        .hover-underline-animation::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -2px;
          background-color: #ff69b4;
          transition: width 0.3s;
        }

        .hover-underline-animation:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
