"use client";

import React from "react";
import { motion } from "framer-motion";

const VisionMissionPage = () => {
  return (
    <main className="min bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-[#ff69b4] mb-4">
          Our Vision & Mission
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Inspiring growth, joy, and success through playful learning.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
        <p className="text-gray-800 text-base leading-relaxed">
          At Little Buttons, we envision a learning space where young children
          are empowered to become curious thinkers, kind friends, and confident
          learners. Our goal is to be a trusted partner for families, shaping a
          community that celebrates diversity, encourages discovery, and lays
          the foundation for lifelong success—both in school and beyond. Our
          vision is to shape future-ready learners who are rooted in cultural
          values yet equipped to thrive in a global world.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Mission</h2>
        <p className="text-gray-800 text-base leading-relaxed">
          At Little Buttons, our mission is to create a joyful and secure
          environment where children can grow, explore, and develop a genuine
          enthusiasm for learning. We are committed to nurturing each
          child&apos;s unique potential through purposeful play, meaningful
          connections, and a curriculum tailored to support early development in
          a caring, inclusive setting. We are committed to nurturing each
          child’s individuality in a safe, loving environment that promotes
          curiosity, creativity, and character-building from the very start.
        </p>
      </motion.div>
    </main>
  );
};

export default VisionMissionPage;
