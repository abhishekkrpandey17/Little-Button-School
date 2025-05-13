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
      className="relative w-full h-[90vh] md:h-[96vh] overflow-hidden"
    >
      {/* Background Images */}
      {bgImages.map((item, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === bgIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`https://api.littlebuttons.swarananjani.org/${item.images[0]}`}
            alt={`Background ${i}`}
            className="w-full h-full object-cover object-center brightness-[0.9]"
          />
        </motion.div>
      ))}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col  text-center px-8 z-20">
        <div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-pink-500 drop-shadow-md ">
            Welcome to
            <br />
            <span className="text-white text-2xl md:text-5xl -mt-4">
              Little Buttons Pre School
            </span>
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
      </div>
    </section>
  );
};

export default HeroSection;
