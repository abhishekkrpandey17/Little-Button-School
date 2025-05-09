"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { useAppContext } from "../context/AppContext";

const HeroSection = () => {
  const { gallery } = useAppContext();

  const bgImages = gallery.slice(0, 6);

  console.log(bgImages);

  const [bgIndex, setBgIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Rotate background every 7 seconds
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
      {/* Background Image Stack */}
      {bgImages.map((item, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === bgIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/* Debugging: console.log(src) can be moved outside JSX if needed */}
          <img
            src={"https://api.littlebuttons.swarananjani.org/" + item.images[0]}
            alt={`Background ${i}`}
            className="brightness-[0.7] object-cover"
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
        <div className="bg-white/20 backdrop-blur-sm p-8 md:p-20 rounded-3xl shadow-xl max-w-5xl border border-white/30">
          <p className="text-[10vmin] lg:text-[8vmin] font-extrabold text-pink-500 drop-shadow-lg leading-tight">
            Welcome to <br />
            <span className="text-[#f6f2f2] text-[9vmin]">
              Little Buttons School
            </span>
          </p>
          <p className="mt-4 text-[3vmin] text-white/90 font-medium">
            Where every child blooms with joy, curiosity, and creativity.
          </p>
        </div>

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
          <Link href="#apply">
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
