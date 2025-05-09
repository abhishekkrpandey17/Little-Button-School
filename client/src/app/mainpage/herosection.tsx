"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";

const HeroSection = () => {
  const { gallery } = useAppContext();
  const bgImages = gallery.slice(0, 6);
  const [bgIndex, setBgIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden"
    >
      {/* Background Images */}
      {bgImages.map((item, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === bgIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`https://api.littlebuttons.swarananjani.org/${item.images[0]}`}
            alt={`Background ${i}`}
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>
      ))}

      {/* Foreground Content */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isInView ? { scale: 1.05, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="bg-white/20 backdrop-blur-[2px] px-6 py-8 md:px-20 md:py-16 rounded-3xl shadow-xl border border-white/20 max-w-xl md:max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-500 drop-shadow-md leading-snug">
            Welcome to
            <br />
            <span className="text-white">Little Buttons School</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/90 font-medium">
            Where every child blooms with joy, curiosity, and creativity.
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 flex flex-col md:flex-row items-center gap-4"
        >
          <Link href="/visit">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
            >
              Book a Visit
            </motion.button>
          </Link>
          <Link href="#apply">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
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
