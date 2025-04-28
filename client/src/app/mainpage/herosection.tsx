"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Banner images (replace with your own)
const images = [
  "/image/schoolbanner1.jpg",
  "/image/schoolbanner2.jpg",
  "/image/schoolbanner3.jpg",
];

// Tagline as a single string for gradient effect
const TAGLINE = "Nurturing Young Minds for a Bright Future";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[65vh] md:h-[85vh] flex flex-col overflow-hidden rounded-b-[2.5rem] shadow-lg bg-gradient-to-b from-blue-100 via-pink-50 to-yellow-100">
      {/* Floating clouds & stars decorations */}
      <motion.div
        initial={{ x: -40, opacity: 0.7 }}
        animate={{ x: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-8 left-8 z-30"
      >
        <span className="text-5xl select-none">☁️</span>
      </motion.div>
      <motion.div
        initial={{ x: 40, opacity: 0.7 }}
        animate={{ x: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-14 right-12 z-30"
      >
        <span className="text-3xl select-none">⭐</span>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0.7 }}
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-16 left-24 z-30"
      >
        <span className="text-4xl select-none">☁️</span>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0.7 }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 z-30"
      >
        <span className="text-2xl select-none">⭐</span>
      </motion.div>

      {/* Slideshow Images */}
      {images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`Banner ${idx + 1}`}
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out rounded-b-[2.5rem] ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transitionProperty: "opacity" }}
        />
      ))}

      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/0 z-20 rounded-b-[2.5rem]" />

      {/* Centered Tagline with rainbow gradient and bounce */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-30 px-4"
      >
        <motion.h1
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 8,
            delay: 0.2,
          }}
          className="text-center text-2xl md:text-5xl font-extrabold drop-shadow-lg select-none"
          style={{
            background:
              "linear-gradient(90deg, #f472b6 0%, #facc15 20%, #34d399 40%, #60a5fa 60%, #a78bfa 80%, #f472b6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {TAGLINE}
        </motion.h1>
      </motion.div>

      {/* Bouncy Buttons at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 80 }}
        className="absolute bottom-0 left-0 w-full z-30 flex justify-center gap-6 pb-8"
      >
        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/visit">
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-7 rounded-full text-lg shadow-lg transition-all border-2 border-pink-200">
              Book a Visit
            </button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08, rotate: 4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/admission">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-7 rounded-full text-lg shadow-lg transition-all border-2 border-yellow-200">
              Apply Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
