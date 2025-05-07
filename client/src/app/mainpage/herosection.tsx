"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  "/image/schoolbanner1.jpg",
  "/image/schoolbanner2.jpg",
  "/image/schoolbanner3.jpg",
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Rotate background images every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // slower change
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden"
    >
      {/* Stacked Images with fade */}
      {backgroundImages.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === bgIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={src}
            alt={`Background ${i}`}
            layout="fill"
            objectFit="cover"
            className="brightness-[0.7]"
          />
        </motion.div>
      ))}

      {/* Foreground Content */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isInView ? { scale: 1.1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
      >
        <div className="bg-white/20 backdrop-blur-s  p-8 md:p-20 rounded-3xl shadow-xl max-w-5xl border border-white/30">
          <p className="text-[10vmin] lg:text-[8vmin] font-extrabold text-[#7641ff] lg:text-[#370ca4] drop-shadow-lg leading-tight">
            Welcome to <br />
            <span className="text-blue-100 text-[9vmin]">Little Buttons School</span>
          </p>
          <p className="mt-4 text-[3vmin] text-white/90 font-medium">
            Where every child blooms with joy, curiosity, and creativity.
          </p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex space-x-6"
        >
          <Link href="/visit">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Book a Visit
            </motion.button>
          </Link>
          <Link href="/apply">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
