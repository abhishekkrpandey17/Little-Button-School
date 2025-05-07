"use client";

import React from "react";
import { motion } from "framer-motion";

const VisionMissionPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#d6ecff] via-[#e0f3fc] to-[#fcd6e0] py-20 px-6 md:px-12">
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
          To be a joyful and trusted place for early learning where every child
          is respected, encouraged, and empowered to blossom in a nurturing
          environment. We envision a community of curious, kind, and confident
          learners equipped for lifelong success.
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
          At Little Buttons School, our mission is to nurture young minds
          through a holistic curriculum that balances academics, creativity,
          social-emotional learning, and physical activity. We aim to provide a
          secure and inspiring space that celebrates each child&#39;s individuality
          and encourages them to thrive.
        </p>
      </motion.div>
    </main>
  );
};

export default VisionMissionPage;